import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../views/user/DashboardPage.vue";
import AdminDashboard from "../views/admin/AdminDashboard.vue";
import WriteBlog from "../views/admin/WriteBlog.vue";

import AdminLayout from "../layouts/AdminLayout.vue";

const routes = [
    { path: '/', name: 'Dashboard', component: DashboardPage },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', component: AdminDashboard },
            { path: 'write', component: WriteBlog }
        ]
    },

]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});