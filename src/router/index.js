import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta 是存路由的資料
      meta: {
        title: '國立科技高中醜醜網頁'
      }
    },
    {
      path: '/guitar',
      name: 'guitar',
      component: () => import('../views/GuitarHistory.vue'),
      meta: {
        title: '吉他社社史'
      }
    },
    {
      path: '/guitar/events',
      name: 'guitar-events',
      component: () => import('../views/GuitarEvents.vue'),
      meta: {
        title: '吉他社近期活動公告'
      }
    },
    {
      path: '/guitar/teach',
      name: 'guitar-teach',
      component: () => import('../views/GuitarTeach.vue'),
      meta: {
        title: '吉他社教學內容'
      }
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import('../views/NotReady.vue'),
      // alias(路由別名) 讓下面設好的路由 也可以使用上面的元件
      // redirect 是讓不同路由用不同元件(??)
      alias: [
        '/dance',
        '/baseball',
        '/badminton',
        '/soccer',
        '/scout'
      ],
      meta: {
        title: '準備中'
      }
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: '404'
      }
    },
    {
      // /:catchAll(.*) 配對所有路徑(正則表達,固定寫法)，以上都不符合的話(path)
      // 捕捉所有不符合的路由，重新導向到 404 的頁面
      path: '/:catchAll(.*)',
      name: 'all',
      // redirect: '/404' 是重新導向到 /404 ，即讓網址也修改成 404
      redirect: '/404'
    }
  ]
})

// 進到每個 router 後執行的 function
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
