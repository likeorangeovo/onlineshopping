<!--
 * @Descripttion: mall page
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-29 17:36:15
-->

<template>
  <comTop></comTop>
  <router-view :key="$route.fullPath"></router-view>
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
<style scoped></style>