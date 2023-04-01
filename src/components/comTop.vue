<!--
 * @Descripttion: a component to the mall top
 * @Author: likeorange
 * @Date: 2023-04-01 00:17:47
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-02 00:30:42
-->
<template>
  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" :ellipsis="false" @select="handleSelect" :router="true">
    <el-menu-item index="/mall/show">MALL</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">购物车</el-menu-item>
    <el-menu-item index="2">我的订单</el-menu-item>
    <el-sub-menu index="3">
      <template #title>个人中心</template>
      <el-menu-item index="3-1">个人信息</el-menu-item>
      <el-menu-item index="3-2">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const activeIndex = ref('1')
    let handleSelect = function () {
      return;
    }
    return {
      activeIndex,
      handleSelect
    }
  }
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>