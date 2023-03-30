<!--
 * @Descripttion: root instance
 * @Author: likeorange
 * @Date: 2023-03-27 23:14:41
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-30 11:01:45
-->
<template>
    <div>
      <RouterView />
    </div>


</template>

<script scoped>
export default {
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  overflow-y: scroll;
}
</style>
