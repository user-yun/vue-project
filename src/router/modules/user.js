import { AsyncComp } from '../utils'
import { RouterView } from 'vue-router'
// 中文
export default () => {
  return [
    {
      path: '/user/group1',
      name: 'userGroup1',
      redirect: '/user/demo3',
      component: AsyncComp(() => import(/* webpackChunkName: "user" */ '@v/layout/index.vue')),
      meta: {
        menu: {
          label: '用户分组1',
        },
      },
      children: [
        {
          path: '/user/demo3',
          name: 'userDemo3',
          component: AsyncComp(
            () => import(/* webpackChunkName: "user" */ '@v/demo/demo3/index.vue'),
          ),
          meta: {
            menu: {
              label: '测试页面3',
            },
          },
        },
        {
          path: '/user/group2',
          name: 'userGroup2',
          redirect: '/user/demo4',
          component: RouterView,
          meta: {
            menu: {
              label: '用户分组2',
            },
          },
          children: [
            {
              path: '/user/demo4',
              name: 'userDemo4',
              component: AsyncComp(
                () => import(/* webpackChunkName: "user" */ '@v/demo/demo4/index.vue'),
              ),
              meta: {
                menu: {
                  label: '测试页面4',
                },
              },
            },
            {
              path: '/user/demo5',
              name: 'userDemo5',
              component: AsyncComp(
                () => import(/* webpackChunkName: "user" */ '@v/demo/demo5/index.vue'),
              ),
              meta: {
                menu: {
                  label: '测试页面5',
                },
              },
            },
          ],
        },
      ],
    },
  ]
}
