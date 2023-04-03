<!--
 * @Descripttion: mall page
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-03 23:19:53
-->

<template>
  <comTop></comTop>
  <router-view></router-view>
</template>
<script>
import comTop from "../components/comTop.vue";
import { store } from "../request/store.js";
export default {
  name: "MallPage",
  components: {
    comTop
  },
  setup(){
    if(localStorage.isLogin != null){
      store.isLogin = localStorage.isLogin
    }
    return {
      store
    }
  }
}
</script>
<style scoped>
</style>