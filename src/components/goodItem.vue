<template >
   <li class="goodsItem">
      <div class="imgBox">
        <img :src="img" alt="商品图片" @click="navTo('/mall/goods/'+id)"/>
      </div>
      <div class="goodsInfo">
        <span class="goodsName ellipsis" @click="navTo('/mall/goods/'+id)">{{name}}</span>
        <span class="price">{{'¥'+price}}</span>
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
    id: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
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