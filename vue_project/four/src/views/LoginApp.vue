<template>
    <form class="card" @submit.prevent="submit">
        <h2>Умная почта</h2>
        <div class="input">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
        </div>

        <div class="input">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
        </div>

        <button class="btn base">Войти</button>
        <router-link to="/forget" v-slot="{ navigate }">
            <button class="btn warning" @click="navigate">Забыли пароль?</button>
        </router-link>
       
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    inject: ['login'],
    computed: {
        isValid(){
            return this.email !== '' && this.password !== ''
        }
    },
    methods: {
        submit(){
            if(this.isValid){
                // this.$router.replace("/dashboard")   
                this.login()        
            }
        }
    }

}
</script>