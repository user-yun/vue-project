import { AsyncComp } from '../utils'
import { RouterView } from 'vue-router'
export default () => {
  const layout = AsyncComp(() => import(/* webpackChunkName: "admin" */ '@v/layout/index.vue'))
  return [
    {
      path: '/user/group1',
      name: 'userGroup1',
      redirect: '/user/demo5',
      component: layout,
      meta: {
        menu: {
          label: 'userGroup1',
        },
      },
      children: [
        {
          path: '/user/demo5',
          name: 'userDemo5',
          component: AsyncComp(
            () => import(/* webpackChunkName: "user" */ '@v/demo/demo5/index.vue'),
          ),
          meta: {
            menu: {
              label: 'userDemo5',
            },
          },
        },
        {
          path: '/user/demo8',
          name: 'userDemo8',
          component: AsyncComp(
            () => import(/* webpackChunkName: "user" */ '@v/demo/demo8/index.vue'),
          ),
          meta: {
            menu: {
              label: 'userDemo8',
            },
          },
        },
        {
          path: '/user/group2',
          name: 'userGroup2',
          redirect: '/user/demo6',
          component: RouterView,
          meta: {
            menu: {
              label: 'userGroup2',
            },
          },
          children: [
            {
              path: '/user/demo6',
              name: 'userDemo6',
              component: AsyncComp(
                () => import(/* webpackChunkName: "user" */ '@v/demo/demo6/index.vue'),
              ),
              meta: {
                menu: {
                  label: 'userDemo6',
                },
              },
            },
            {
              path: '/user/demo7',
              name: 'userDemo7',
              component: AsyncComp(
                () => import(/* webpackChunkName: "user" */ '@v/demo/demo7/index.vue'),
              ),
              meta: {
                menu: {
                  label: 'userDemo7',
                },
              },
            },
          ],
        },
      ],
    },
  ]
}
