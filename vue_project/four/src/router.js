import { createRouter, createWebHistory } from "vue-router";
import LoginApp from './views/LoginApp.vue';
import ForgetApp from "./views/ForgetApp.vue";
import DashboardApp from "./views/DashboardApp.vue";
import MailApp from "./views/MailApp.vue";
import AppEmailBody from './components/AddEmailBody.vue'
import NotFound from "./views/NotFound.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: LoginApp, alias: '/'},
        {path: '/forget', component: ForgetApp},
        {path: '/dashboard', component: DashboardApp},
        {path: '/mail', component: MailApp, children: [
            {path: ':mailId?', component: AppEmailBody, props: true}
        ]},
        // {path: '/:notFound(.*)', redirect: '/login'}
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})