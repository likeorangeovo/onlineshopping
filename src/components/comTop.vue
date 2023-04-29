<!--
 * @Descripttion: a component to the mall top
 * @Author: likeorange
 * @Date: 2023-04-01 00:17:47
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-03 23:11:54
-->
<template>
  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" :ellipsis="false" @select="handleSelect" :router="true">
    <el-menu-item index="/mall/show">MALL</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="/mall/personal" v-if="store.isLogin">
      <template #title>个人中心</template>
      <el-menu-item index="/mall/personal/cart">购物车</el-menu-item>
      <el-menu-item index="/mall/personal/myOrder">我的订单</el-menu-item>
      <el-menu-item index="/mall/personal/myInfo">个人信息</el-menu-item>
      <el-menu-item index="/mall/show" @click="logoutUser">退出登录</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/login" v-else>登录/注册</el-menu-item>
  </el-menu>
</template>
<script>
import { ref } from "vue";
import { store,recommendId } from "../request/store.js";
import { logout } from "../request/index.js"
import  errThrow  from "../hooks/errThrow.js";
export default {
  setup() {
    const activeIndex = ref('1')
    let handleSelect = function () {
      return;
    }
    async function logoutUser() {
      const logoutRes = await logout()
      errThrow(logoutRes)
      localStorage.removeItem("isLogin")
      localStorage.removeItem("recommendId")
      store.isLogin = false;
      recommendId.value = [];
    }
    return {
      activeIndex,
      handleSelect,
      store,
      logoutUser
    }
  }
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>