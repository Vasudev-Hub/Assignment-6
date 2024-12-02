import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Movies from '../views/Movies.vue';
import Register from '../views/Register.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/movies', component: Movies },
    { path: '/register', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;