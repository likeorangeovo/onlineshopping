<!--
 * @Descripttion: a component to the mall header
 * @Author: likeorange
 * @Date: 2023-03-28 16:39:17
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-30 13:25:45
-->
<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">购物车</el-menu-item>
    <el-menu-item index="2">我的订单</el-menu-item>
    <el-sub-menu index="3">
      <template #title>个人中心</template>
      <el-menu-item index="3-1">个人信息</el-menu-item>
      <el-menu-item index="3-2">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <div class="search">
    <el-input placeholder="请输入内容" v-model="content">
      <template #suffix>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
    </el-input>
  </div>

  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const content = ref('')
    const activeIndex = ref('1')
    let handleSelect = function () {
      return;
    }
    return {
      content,
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
.search {
  display: flex;
  height: 6vh;
  font-size: 3vh;
  margin: 1% 20%;
}
:deep(.el-input){
  font-size:100%;
  line-height: 100%;
}
</style>