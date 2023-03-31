/*
 * @Descripttion: a config file about router
 * @Author: likeorange
 * @Date: 2023-03-27 23:14:41
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-30 17:25:23
 */

import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import loginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
  ]
})

export default router
