/*
 * @Descripttion: a config file about router
 * @Author: likeorange
 * @Date: 2023-03-27 23:14:41
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-01 17:17:24
 */

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/mall'
    },
    {
      path: '/mall',
      name: 'Mall',
      component: () => import('../views/Mall.vue'),
      redirect:'/mall/show',
      children:[
        {
          path: 'show',
          name: 'MallShow',
          component:() => import('../views/MallShow.vue') ,
          redirect:'/mall/show/index',
          children:[
            {
              path: 'index',
              name: 'MallIndex',
              component:() => import('../views/MallIndex.vue'),
            },
            {
              path: 'goodsList/:id',
              name: 'GoodsList',
              component:() => import('../views/GoodsList.vue'),
            },
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/categoryShow.vue')
    },
  ]
})

export default router
