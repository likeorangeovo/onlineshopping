<!--
 * @Descripttion: mall homepage
 * @Author: likeorange
 * @Date: 2023-03-28 20:11:56
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-31 15:41:55
-->

<template>
  <comTop></comTop>
  <comHeader v-cloak></comHeader>

  <el-carousel indicator-position="outside" type="card" :height="'65' + 'vh'">
    <el-carousel-item v-for="item in carouselBox" :key="item.id">
      <img :src=item.primary_pic_url class="image">
    </el-carousel-item>
  </el-carousel>

  <ul class="infinite-list">
    <li v-for="item in hotgoodsBox" :key="item.id" class="infinite-list-item">
      <goodItem :good="item"></goodItem>
    </li>
  </ul>

  <div class='bottom'>
    <el-pagination id='bottom' v-model:current-page="page" background layout="prev, pager, next" :pager-count="11"
      :total="total" @current-change="load" />
  </div>
</template>
<script>
import comHeader from "../components/comHeader.vue";
import goodItem from "../components/goodItem.vue";
import comTop from "../components/comTop.vue";
import { ref, onBeforeMount } from 'vue';
import { carousel, hotgoods } from "../request/index.js"
export default {
  name: "homeView",
  setup() {
    let page = ref(1)
    let total = ref(0)
    let carouselBox = ref([])
    let hotgoodsBox = ref([])
    async function load() {
      const hotgoodsRes = await hotgoods({ page: page.value })
      hotgoodsBox.value = hotgoodsRes.data.data
    }

    onBeforeMount(async () => {
      //dom 挂载后
      const carouselRes = await carousel()
      carouselBox.value.push(...carouselRes.data.data)
      const hotgoodsRes = await hotgoods({ page: page.value })
      total.value = hotgoodsRes.data.total
      hotgoodsBox.value.push(...hotgoodsRes.data.data)
    })
    return {
      page,
      total,
      carouselBox,
      hotgoodsBox,
      load,
    }
  },
  components: {
    comHeader,
    goodItem,
    comTop
  },

}
</script>
<style scoped>
/* 轮播图样式 */
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

.image {
  /*设置图片宽度*/
  width: 100%;
  height: inherit;
}

/* 无限滚动样式 */
.infinite-list {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  padding: 0 5px;
  list-style-type: none;
}

.infinite-list .infinite-list-item {
  flex: 0 0 24%;
  margin-right: calc(4% / 3);
  margin-bottom: calc(4% / 3);
}

.infinite-list-item:nth-child(4n) {
  margin-right: 0;
}

.bottom {
  display: -webkit-flex;
  -webkit-justify-content: center;
  padding: 10px 100px 30px 100px;
}

[v-cloak] {
display: none; 
} 
</style>