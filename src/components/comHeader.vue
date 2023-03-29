<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-03-28 16:39:17
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-28 19:55:11
-->
<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
    </el-sub-menu>
  </el-menu>
</template>
<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
}
</script>
<style></style>