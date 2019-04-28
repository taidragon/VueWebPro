import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/Main/Main.vue'),
      meta: {
        title: '主界面'
      },
      children: [
        {
          path: '/testPage',
          name: 'testPage',
          component: () => import('../components/TestPage.vue'),
          meta: {
            title: '测试页面'
          }
        },
        {
          path: '/testPage2',
          name: 'testPage2',
          component: () => import('../components/TestPage2.vue'),
          meta: {
            title: '测试页面2'
          }
        },
        {
          path: '/cascade',
          name: 'cascade',
          component: () => import('../views/Cascade/QueryBox.vue'),
          meta: {
            title: '级联查询'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})
