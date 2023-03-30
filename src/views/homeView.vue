<!--
 * @Descripttion: mall homepage
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-31 00:22:21
-->

<template>
  <div>
    <comHeader></comHeader>
    <el-carousel indicator-position="outside" type="card" :height = "'55'+'vh'">
      <el-carousel-item  v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>

    <goodItem></goodItem>
  </div>
</template>
<script>
import comHeader from "../components/comHeader.vue";
import goodItem from "../components/goodItem.vue";
export default {
  setup(){
    let imagebox = [
    {id: 0, idView: 'http://yanxuan.nosdn.127.net/33c1b1b20972990e0ae81f260b00f036.jpg'},
      {id: 1, idView: 'http://yanxuan.nosdn.127.net/599ee624350ecb9e70c32375c0cd4807.jpg'}
    ]
    return {
    imagebox
  }
  },
  components: {
    comHeader,
    goodItem
  },

}
</script>
<style scoped>
:deep(.el-carousel__item) {
/*修改卡片宽度*/
  width: 50vw;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.image{
/*设置图片宽度*/
  width:100%;
  height:inherit;
}
</style>