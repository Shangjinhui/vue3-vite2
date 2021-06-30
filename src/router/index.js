import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

// 开启历史模式
// history模式createWebHistory     hash模式createWebHashHistory
const routerHistory = createWebHashHistory();
// console.log(routerHistory)
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/contact',
            component: () => import('@/views/Contact.vue')
        }
    ]
})

export default router