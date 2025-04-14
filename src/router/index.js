import { createRouter, createWebHistory } from 'vue-router'
import { AsyncComp } from './utils'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AsyncComp(() => import('@v/default/login/index.vue')),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AsyncComp(() => import('../views/AboutView.vue')),
    },
  ],
})

export default router
