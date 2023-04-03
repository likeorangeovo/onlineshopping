/*
 * @Descripttion: a config file about router
 * @Author: likeorange
 * @Date: 2023-03-27 23:14:41
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-02 19:18:21
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
      redirect: '/mall/show',
      children: [
        {
          path: 'show',
          name: 'MallShow',
          component: () => import('../views/MallShow.vue'),
          redirect: '/mall/show/index',
          children: [
            {
              path: 'index',
              name: 'MallIndex',
              component: () => import('../views/MallIndex.vue'),
            },
            {
              path: 'goodsList/:id',
              name: 'GoodsList',
              component: () => import('../views/GoodsList.vue'),
            },
          ]
        },
        {
          path: 'goods/:id',
          name: 'GoodsDetail',
          component: () => import('../views/GoodsDetail.vue'),
        },
        {
          path: 'personal',
          name: 'Personal',
          component:() => import('../views/PersonalView.vue'),
          redirect:'/mall/personal/cart',
          children:[
            {
              path: 'cart',
              name: 'Cart',
              component: () => import('../views/CartView.vue'),
              // meta: {
              //   requireLogin:true,
              // },
            },{
              path: 'myInfo',
              name: 'MyInfo',
              component:() => import('../views/MyInfo.vue'),
              // meta: {
              //   requireLogin:true,
              // },
            },{
              path: 'myOrder',
              name: 'MyOrder',
              component:() => import('../views/MyOrder.vue'),
              // meta: {
              //   requireLogin:true,
              // },
            }
          ]
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue')
    },
  ]
})

export default router
