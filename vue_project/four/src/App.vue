<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
  components: {TheNavbar},
  data() {
    return{
      isAuth: false
    }
  },
  methods: {
    login(){
      this.isAuth = true
      if(this.$route.query.page){
        this.$router.push(this.$route.query.page)
      } else{
          this.$router.push('/dashboard')
      }    
    },
    logout(){
      this.isAuth = false
      this.$router.push({
        path: '/login',
        query: {
          page: this.$route.path
        }
      })
    }
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: 1, theme: "Тема письма 1" },
        { id: 2, theme: "Тема письма 2" },
        { id: 3, theme: "Тема письма 3" },
        { id: 4, theme: "Тема письма 4" },
        { id: 5, theme: "Тема письма 5" },
      ],
    };
  },
};
</script>

<style>
</style>
