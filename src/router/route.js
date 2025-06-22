import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../views/user/DashboardPage.vue"

const routes = [
    { path: '/', name: 'Dashboard', component: DashboardPage }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});