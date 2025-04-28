import { createRouter, createWebHistory } from 'vue-router'
import { AsyncComp, beforeEach } from './utils'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: AsyncComp(() => import(/* webpackChunkName: "login" */ '@v/default/login/index.vue')),
  },
  {
    path: '/loading',
    name: 'loading',
    component: AsyncComp(() => import(/* webpackChunkName: "loading" */ '@v/default/transition/Loading.vue')),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: AsyncComp(() => import(/* webpackChunkName: "pathMatch" */ '@v/default/transition/Error.vue')),
  },
  {
    path: '/',
    name: 'home',
    component: AsyncComp(() => import('../views/HomeView.vue')),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AsyncComp(() => import('../views/AboutView.vue')),
  },
]
const routePaths = routes.map((e) => e.path)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})
// import { useRouter, useRoute } from 'vue-router'

// const router = useRouter()
// const route = useRoute()

// function pushWithQuery(query) {
//   router.push({
//     name: 'search',
//     query: {
//       ...route.query,
//       ...query,
//     },
//   })
// }
beforeEach(router)
export { routePaths }
export default router
