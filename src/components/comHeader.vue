<!--
 * @Descripttion: a component to the mall header
 * @Author: likeorange
 * @Date: 2023-03-28 16:39:17
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-31 23:28:03
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
        <el-icon class="el-input__icon">
          <Search />
        </el-icon>
      </template>
    </el-input>
  </div>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu :index=String(item.index) v-for="item in mainCatrgory" :key="item.id">
      <template #title>{{ item.name }}</template>
      <el-menu-item :index="item.index + '-' + index" v-for="(sub, index) in item.sub" :key="sub.id">{{ sub.name }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { category } from "../request/index.js"
export default {
  setup() {
    const content = ref('')
    const activeIndex = ref('1')
    let mainCatrgory = ref([])
    let index = ref(2)
    let handleSelect = function () {
      return;
    }
    onBeforeMount(async () => {
      const categoryRes = await category()
      for (let item of categoryRes.data.data) {
        if (item.level == 'L1') {
          item.sub = []
          item.index = index.value
          index.value += 1
          for (let sub of categoryRes.data.data) {
            if (sub.parent_id == item.id) {
              item.sub.push(sub)
            }
          }
          mainCatrgory.value.push(item)
        }
      }
    })
    return {
      content,
      activeIndex,
      handleSelect,
      mainCatrgory
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

:deep(.el-input) {
  font-size: 100%;
  line-height: 100%;
}
</style>