import { AsyncComp } from '../utils'
import { RouterView } from 'vue-router'

export default () => {
  return [
    {
      path: '/demo22',
      name: 'demo22',
      redirect: '/demo3',
      component: AsyncComp(() => import(/* webpackChunkName: "demo2" */ '@v/layout/index.vue')),
      children: [
        {
          path: '/demo3',
          name: 'demo3',
          component: AsyncComp(() => import(/* webpackChunkName: "demo2" */ '@v/demo/demo3/index.vue')),
        },
        {
          path: '/demo44',
          name: 'demo44',
          redirect: '/demo4',
          component: RouterView,
          children: [
            {
              path: '/demo4',
              name: 'demo4',
              component: AsyncComp(() => import(/* webpackChunkName: "demo2" */ '@v/demo/demo4/index.vue')),
            },
            {
              path: '/demo5',
              name: 'demo5',
              component: AsyncComp(() => import(/* webpackChunkName: "demo2" */ '@v/demo/demo5/index.vue')),
            },
          ],
        },
      ],
    },
  ]
}
