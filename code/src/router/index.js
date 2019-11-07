/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 12:08:54
 * @LastEditTime: 2019-09-02 16:03:30
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import lazyLoadView from '@/utils/lazy-load-view'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => lazyLoadView(import('@/views/Home.vue'))
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => lazyLoadView(import('@/views/About.vue'))
    },
    {
      path: '*',
      component: () => lazyLoadView(import('@/components/public/RouteError.vue'))
    }
  ]
})
