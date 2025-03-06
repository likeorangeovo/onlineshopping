<!--
 * @Descripttion: mall page
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-29 17:36:15
-->

<template>
  <comTop></comTop>
  <div class="back">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import comTop from "../components/comTop.vue";
import { store, recommendId } from "../request/store.js";
import { recommendGoods } from "../request/index.js"
export default {
  name: "MallPage",
  components: {
    comTop
  },
  setup() {
    async function update() {
      const ids = await recommendGoods()
      localStorage.setItem("recommendId", JSON.stringify(ids.data))
    }
    if (localStorage.isLogin != null) {
      store.isLogin = localStorage.isLogin
    }
    if (localStorage.recommendId != null) {
      recommendId.value = localStorage.recommendId
      update()
    }
    return {
      store,
      update
    }
  }
}
</script>
<style scoped>
.back {
  width: 100%;
  /* background-image: linear-gradient(#e8f3ff, #fff); */
  background-image: 
    linear-gradient(to bottom, transparent, white), /* 从透明到白色的渐变 */
    url('../asserts/images/new-content-bg.png'); /* 背景图片 */
  background-size: 100% 800px;
  background-repeat: no-repeat;
}
</style>