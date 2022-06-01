import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CalorieCounter from "../views/CalorieCounter.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/calorieCounter',
        name: 'CalorieCounter',
        component: CalorieCounter,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;