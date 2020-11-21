import Vue from 'vue'
import VueRouter from 'vue-router'
import CryptoConverter from '@/components/CryptoConverter.vue'
import CryptoInfo from '@/components/CryptoInfo.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: CryptoInfo
    },
    {
        path: '/converter',
        name: 'converter',
        component: CryptoConverter
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router