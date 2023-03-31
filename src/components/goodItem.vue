<!--
 * @Descripttion: a component to the goods display module
 * @Author: likeorange
 * @Date: 2023-03-30 16:17:52
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-31 14:02:11
-->

<template >
  <li class="goodsItem">
    <div class="imgBox">
      <img :src=good.primary_pic_url alt="商品图片"
        @click="navTo('/mall/goods/')" />
    </div>
    <div class="goodsInfo">
      <span class="goodsName ellipsis" @click="navTo('/mall/goods/' + id)">{{good.name}}</span>
      <span class="price">{{ '¥' + good.retail_price }}</span>
    </div>
  </li>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'goodsItem',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const navTo = function () {
      router.push(route);
    }
    return {
      navTo
    }
  },
  props: {
    good: {
      type: Object,
      default: () => { },
    }
  },
}
</script>
<style >
.goodsItem {
  display: inline-block;
  width: 266px;
  height: 360px;
  overflow: hidden;
}

.imgBox {
  width: 100%;
  height: 266px;
  overflow: hidden;
}

.imgBox img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s;
}

.goodsInfo {
  width: 100%;
  height: 60px;
  font-size: 14px;
}

.goodsName {
  display: block;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 20px;
}

.price {
  display: block;
  text-align: center;
  color: #545c64;
}
</style>