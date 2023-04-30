<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 15:44:36
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-30 19:44:09
-->

<template>
   <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{path: '/mall/show'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path: '/mall/personal/cart'}" v-if="$route.path
    == '/mall/personal/cart'">购物车</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path: '/mall/personal/myOrder'}" v-if="$route.path
    == '/mall/personal/myOrder'">我的订单</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path: '/mall/personal/myInfo'}" v-if="$route.path
    == '/mall/personal/myInfo'">我的信息</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="container">
    <div class="nav">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" 
        :router="true">
        <el-menu-item :index="'/mall/personal/cart'">
          <el-icon>
            <ShoppingCart />
          </el-icon>
          <span>购物车</span>
        </el-menu-item>

        <el-menu-item :index="'/mall/personal/myOrder'">
          <el-icon>
            <ShoppingBag />
          </el-icon>
          <span>我的订单</span>
        </el-menu-item>

        <el-menu-item :index="'/mall/personal/myInfo'">
          <el-icon>
            <User />
          </el-icon>
          <span>我的信息</span>
        </el-menu-item>

      </el-menu>
    </div>
    <div class="content"><router-view></router-view></div>
  </div>
</template>
<script>
export default {
  name: 'PersonalView',
  setup() {
    console.log()
  }
}
</script>
<style scoped>
.container {
  padding: 30px 120px;
  display: flex;
  flex-direction: row;
}

.nav {
  flex: 0 0 300px;
}

.content {
  margin-left: 60px;
  flex: 1 0 auto;
  border: 2px solid #BEBEBE;
}

.breadcrumb{
  padding: 30px 140px 0px 140px;
  font-size: 20px;
}
</style>