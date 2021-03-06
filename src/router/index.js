import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: () =>
            import ('../views/Inicio.vue')
    },
    {
        path: '/photos',
        name: 'Photos',
        component: () =>
            import ('../views/Photos.vue')
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () =>
            import ('../views/Videos.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router