<template>
  <div class="card">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in emails" :key="email.id">
          <router-link :to="'/mail/' + email.id">
            {{ email.theme }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!-- <app-email-body :mail-id="$route.params.mailId"></app-email-body> -->
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import AppEmailBody from "../components/AddEmailBody.vue";

export default {
  inject: ["emails"],
//   components: {
//     AppEmailBody,
//   },
};
</script>

<style scoped>
.card {
  display: flex;
}
.list {
  list-style: none;
  padding: 0;
}
.card-nav {
  min-width: 170px;
  border-right: 1px solid #999;
}
.card-body {
  padding-left: 40px;
}
.list-item {
  padding: 10px;
}
.list-item a {
  text-decoration: none;
  font-weight: bold;
  color: green;
}
.list-item a:hover {
  color: darkolivegreen;
}
.list-item a.active {
  color: black;
  text-decoration: underline;
}
</style>