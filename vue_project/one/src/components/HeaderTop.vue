<template>
    <h2>Header</h2>
    <hr>
    <h3>Счетчик: {{ counter }}</h3>
    <button v-on:click="counter++">Добавить</button>
    <button v-on:click="counter--">Вычесть</button>
</template>

<script>
export default {
    name: 'HeaderTop',
    data(){
        return{
            counter: 0
        }
    }
}
</script>

<!-- <style>
</style> -->