<!--
 * @Descripttion: root instance
 * @Author: likeorange
 * @Date: 2023-03-27 23:14:41
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-28 22:27:27
-->
<template>
  <div id="app" >
    <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component"  v-if="!$route.meta.keepAlive"/>
  </router-view> 
  
  </div>
</template>

<script scoped>
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    return {
      route
    };
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-size: 100% 100%;
  overflow-y: scroll;
}
</style>
