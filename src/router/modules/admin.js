import { AsyncComp } from '../utils'
// import { RouterView } from 'vue-router'
// 中文
export default () => {
  return [
    {
      path: '/admin/group1',
      name: 'adminGroup1',
      redirect: '/admin/demo1',
      component: AsyncComp(() => import(/* webpackChunkName: "admin" */ '@v/layout/index.vue')),
      meta: {
        menu: {
          label: '管理员分组1',
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
              label: '测试页面1',
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
              label: '测试页面2',
            },
          },
        },
      ],
    },
    {
      path: '/admin/group2',
      name: 'adminGroup2',
      redirect: '/admin/demo3',
      component: AsyncComp(() => import(/* webpackChunkName: "admin" */ '@v/layout/index.vue')),
      meta: {
        menu: {
          label: '管理员分组2',
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
              label: '测试页面3',
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
              label: '测试页面4',
            },
          },
        },
      ],
    },
  ]
}
