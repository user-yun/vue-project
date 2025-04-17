import { AsyncComp } from '../utils'
// import { RouterView } from 'vue-router'

export default () => {
  return [
    {
      path: '/demo1path',
      name: 'demo1path',
      redirect: '/demo1',
      component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/layout/index.vue')),
      children: [
        {
          path: '/demo1',
          name: 'demo1',
          component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/demo/demo1/index.vue')),
        },
        {
          path: '/demo2',
          name: 'demo2',
          component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/demo/demo2/index.vue')),
        },
      ],
    },
  ]
}
