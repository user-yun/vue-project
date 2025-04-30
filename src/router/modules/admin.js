import { AsyncComp } from '../utils'
// import { RouterView } from 'vue-router'
export default () => {
  const layout = AsyncComp(() => import(/* webpackChunkName: "admin" */ '@v/layout/index.vue'))
  return [
    {
      path: '/admin/group1',
      name: 'adminGroup1',
      redirect: '/admin/demo1',
      component: layout,
      meta: {
        menu: {
          label: 'adminGroup1',
          icon: 'HomeOutlined',
        },
      },
      children: [
        {
          path: '/admin/demo1',
          name: 'adminDemo1',
          component: AsyncComp(
            () => import(/* webpackChunkName: "admin" */ '@v/demo/demo1/index.vue'),
          ),
          meta: {
            menu: {
              label: 'adminDemo1',
            },
          },
        },
        {
          path: '/admin/demo2',
          name: 'adminDemo2',
          component: AsyncComp(
            () => import(/* webpackChunkName: "admin" */ '@v/demo/demo2/index.vue'),
          ),
          meta: {
            menu: {
              label: 'adminDemo2',
            },
          },
        },
      ],
    },
    {
      path: '/admin/group2',
      name: 'adminGroup2',
      redirect: '/admin/demo3',
      component: layout,
      meta: {
        menu: {
          label: 'adminGroup2',
        },
      },
      children: [
        {
          path: '/admin/demo3',
          name: 'adminDemo3',
          component: AsyncComp(
            () => import(/* webpackChunkName: "admin" */ '@v/demo/demo3/index.vue'),
          ),
          meta: {
            menu: {
              label: 'adminDemo3',
            },
          },
        },
        {
          path: '/admin/demo4',
          name: 'adminDemo4',
          component: AsyncComp(
            () => import(/* webpackChunkName: "admin" */ '@v/demo/demo4/index.vue'),
          ),
          meta: {
            menu: {
              label: 'adminDemo4',
            },
          },
        },
      ],
    },
  ]
}
