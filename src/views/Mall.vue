<!--
 * @Descripttion: mall page
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-01 17:05:25
-->

<template>
  <comTop></comTop>
  <router-view></router-view>
</template>
<script>
import comTop from "../components/comTop.vue";

export default {
  name: "MallPage",
  components: {
    comTop
  },

}
</script>
<style scoped>
</style>