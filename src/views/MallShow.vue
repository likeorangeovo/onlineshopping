<!--
 * @Descripttion: mall homepage
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-01 17:27:25
-->

<template>
  <comHeader v-cloak></comHeader>
  <router-view :key="route.fullPath"></router-view>
</template>
<script>
import comHeader from "../components/comHeader.vue";
import { useRoute } from 'vue-router'
export default {
  name: "MallShow",
  setup(){
    const route = useRoute()
    return {
      route
    }
  },
  components: {
    comHeader,
  },

}
</script>
<style scoped>
[v-cloak] {
display: none; 
} 
</style>