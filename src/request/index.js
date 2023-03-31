/*
 * @Descripttion: used for network request processing
 * @Author: likeorange
 * @Date: 2023-03-29 11:48:45
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-31 16:46:04
 */
import axiosUser from "./request";

export const login =  (params) => axiosUser({
  url:'/login',
  data:params,
  method:'post',
  headers:{
    'content-type':'application/json'
  }
})

export const register =  (params) => axiosUser({
  url:'/register',
  data:params,
  method:'post',
  headers:{
    'content-type':'application/json'
  }
})

export const carousel =  () => axiosUser({
  url:'/carousel',
  method:'get',
  headers:{
    'content-type':'application/json'
  }
})

export const hotgoods =  (query) => axiosUser({
  url:'/hotgoods',
  params:query,
  method:'get',
  headers:{
    'content-type':'application/json'
  }
})

export const category =  () => axiosUser({
  url:'/category',
  method:'get',
  headers:{
    'content-type':'application/json'
  }
})