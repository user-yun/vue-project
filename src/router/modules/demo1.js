import { AsyncComp } from '../utils'
// import { RouterView } from 'vue-router'

export default () => {
  return [
    {
      path: '/demo1path',
      name: 'demo1path',
      redirect: '/demo1',
      component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/layout/index.vue')),
      meta: {
        menu: {
          label: '测试页面组1',
          title: '测试页面组1',
        },
      },
      children: [
        {
          path: '/demo1',
          name: 'demo1',
          component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/demo/demo1/index.vue')),
          meta: {
            menu: {
              label: '测试页面1',
              title: '测试页面1',
            },
          },
        },
        {
          path: '/demo2',
          name: 'demo2',
          component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/demo/demo2/index.vue')),
          meta: {
            menu: {
              label: '测试页面2',
              title: '测试页面2',
            },
          },
        },
      ],
    },
    {
      path: '/demo11path',
      name: 'demo11path',
      redirect: '/demo11',
      component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/layout/index.vue')),
      meta: {
        menu: {
          label: '测试页面组11',
          title: '测试页面组11',
        },
      },
      children: [
        {
          path: '/demo11',
          name: 'demo11',
          component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/demo/demo1/index.vue')),
          meta: {
            menu: {
              label: '测试页面11',
              title: '测试页面11',
            },
          },
        },
        {
          path: '/demo22',
          name: 'demo22',
          component: AsyncComp(() => import(/* webpackChunkName: "demo" */ '@v/demo/demo2/index.vue')),
          meta: {
            menu: {
              label: '测试页面22',
              title: '测试页面22',
            },
          },
        },
      ],
    },
  ]
}
