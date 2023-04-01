<!--
 * @Descripttion: categoryshow page
 * @Author: likeorange
 * @Date: 2023-04-01 00:24:41
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-01 16:07:53
-->

<template>
  <comTop></comTop>
  <comHeader></comHeader>

  <ul class="infinite-list">
    <li v-for="item in goodsBox" :key="item.id" class="infinite-list-item">
      <goodItem :good="item"></goodItem>
    </li>
  </ul>
  <div class='bottom'>
    <el-pagination id='bottom' v-model:current-page="page" background layout="prev, pager, next" :pager-count="11"
      :total="total" @current-change="load" />
  </div>

</template>
<script>
import comTop from "../components/comTop.vue";
import comHeader from "../components/comHeader.vue";
import goodItem from "../components/goodItem.vue";
import { ref, onBeforeMount } from 'vue';
import { categoryGoods } from "../request/index.js"
import { useRoute } from 'vue-router'
export default {
  name: "categoryShow",
  setup() {
    let page = ref(1)
    let total = ref(0)
    let goodsBox = ref([])
    const route = useRoute()
    async function load() {
      const goodsRes = await categoryGoods({id:route.params.id ,page: page.value })
      goodsBox.value = goodsRes.data.data
    }
    onBeforeMount(async () => {
      const goodsRes = await categoryGoods({ id:route.params.id, page: page.value })
      console.log(goodsRes)
      total.value = goodsRes.data.total
      goodsBox.value.push(...goodsRes.data.data)
    })
    return {
      page,
      total,
      goodsBox,
      load,
    }
  },
  components: {
    comTop,
    comHeader,
    goodItem
  }

}
</script>
<style scoped>
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
</style>