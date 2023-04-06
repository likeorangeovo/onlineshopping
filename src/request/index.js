/*
 * @Descripttion: used for network request processing
 * @Author: likeorange
 * @Date: 2023-03-29 11:48:45
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-06 14:21:48
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

export const logout =  () => axiosUser({
  url:'/logout',
  method:'get',
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

export const categoryGoods = (query) => axiosUser({
  url:'/categorygoods',
  params:query,
  method:'get',
  headers:{
    'content-type':'application/json'
  }
})

export const goodDetail = (query) => axiosUser({
  url:'/gooddetail',
  params:query,
  method:'get',
  headers:{
    'content-type':'application/json'
  }
})

export const addCart = (query) => axiosUser({
  url:'/addcart',
  data:query,
  method:'post',
  headers:{
    'content-type':'application/json'
  }
})

export const getCart = (query) => axiosUser({
  url:'/getcart',
  params:query,
  method:'get',
  headers:{
    'content-type':'application/json'
  }
})
