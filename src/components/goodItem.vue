<!--
 * @Descripttion: a component to the goods display module
 * @Author: likeorange
 * @Date: 2023-03-30 16:17:52
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-03 23:25:27
-->

<template >
  <li class="goodsItem" >
    <div class="imgBox" @click="navTo(good.id)">
      <img :src=good.primary_pic_url alt="商品图片"  />
    </div>
    <div class="goodsInfo" @click="navTo(good.id)">
      <span class="goodsName ellipsis">{{ good.name }}</span>
      <span class="price">{{ '¥' + good.retail_price }}</span>
    </div>
  </li>
</template>
<script>
import { useRouter } from 'vue-router'
import { store } from "../request/store.js";
export default {
  name: 'goodsItem',
  setup() {
    const router = useRouter()
    const navTo = function (id) {
      if (store.isLogin) {
        return router.push({
          name: 'GoodsDetail',
          params: {
            id: id,
          },
        });
      }
      return router.push({
        name: 'login'
      });
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