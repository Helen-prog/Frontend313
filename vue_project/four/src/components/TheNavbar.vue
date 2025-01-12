<template>
    <header class="navbar" v-if="visible">
        <h3>Smart Mail</h3>
        <ul class="navbar-menu">
            <li><router-link to="/dashboard">Главная</router-link></li>
            <li><router-link to="/mail" custom v-slot="{navigate, href}">
               <a href="#" @click="navigate" :class="{
                active: $route.path.indexOf(href) !== -1
               }"> Почта</a>
            </router-link></li>
            <li><a href="#" @click.prevent="logout">Выйти</a></li>
        </ul>
    </header>
</template>

<script>
export default {
    inject: ['logout'],
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: greenyellow;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-weight: bold;
}
.navbar-menu{
    display: flex;
    list-style: none;
}
.navbar-menu a{
    margin-left: 20px;
    text-decoration: none;
    color: green;
}
.navbar-menu a.active{
    text-decoration: underline;
    color: #000;
}
</style>