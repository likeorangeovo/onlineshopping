<!--
 * @Descripttion: goodDetail
 * @Author: likeorange
 * @Date: 2023-04-01 17:37:24
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-07 22:32:00
-->
<template >
  <div class="goodInfo">
    <div>
      <img class="infoLeft" :src="good.primary_pic_url" alt="商品图片" />
    </div>
    <div class="infoRight">
      <div class="infoBox">
        <h3 class="name">{{ good.name }}</h3>
      </div>
      <div class="infoBox">
        <p>{{ good.goods_brief }}</p>
      </div>
      <div class="infoBox">
        <h3 class="price">{{ '¥' + good.retail_price }}</h3>
      </div>
      <div class="infoBox">
        <span>库存：</span>
        <span class="tips">{{ '剩余' + good.goods_number + '件' }}</span>
      </div>
      <div class="infoBox">
        <span>数量：</span>
        <el-input-number v-model="num" :min="1" :max="good.goods_number" />
      </div>
      <button class="buyBtn" @click="addToOrder">立即购买</button>
      <button @click="addToCart">加入购物车</button>
    </div>
  </div>
</template>
<script>
import { onBeforeMount, ref } from 'vue'
import { goodDetail, addCart, addOrder } from "../request/index.js"
import { useRoute } from 'vue-router'
import errThrow from "../hooks/errThrow.js";
export default {
  setup() {
    let num = ref(1)
    let good = ref({})
    const route = useRoute()
    const handleChange = () => {
      console.log(1)
    }
    onBeforeMount(async () => {
      const goodDetailRes = await goodDetail({ id: route.params.id })
      good.value = { ...goodDetailRes.data.data }
    })
    async function addToCart() {
      const addCartRes = await addCart(JSON.stringify({ 
        id: good.value.id,
        name:good.value.name,
        retail_price:good.value.retail_price,
        goods_number:num.value,
        list_pic_url:good.value.list_pic_url,
      }))
      errThrow(addCartRes)
    }
    async function addToOrder() {
      const addOrderRes = await addOrder(JSON.stringify({ 
        goods_id: good.value.id,
        total_price:good.value.retail_price,
        price:good.value.retail_price,
        quantity:num.value,
      }))
      errThrow(addOrderRes)
    }
    return {
      num,
      good,
      addToCart,
      addToOrder,
      handleChange
    }
  },

}
</script>
<style scoped>
.goodInfo {
  display: flex;
  padding-top: 30px;
  width: 100%;
  overflow: hidden;
}

.infoLeft {
  width: 500px;
  height: 500px;
  margin-left: 60px;
}

.infoRight {
  margin-top: 20px;
  margin-left: 120px;
  flex-grow: 1;
  text-align: left;
  justify-content: center;
}

.infoBox {
  margin-bottom: 30px;
}

.name {
  font-size: 30px;
}

p {
  color: black;
  font-size: 20px;
}

.price {
  text-align: left;
  font-size: 40px;
  color: black;
}

span {
  color: black;
  font-size: 20px;
  display: inline-block;
  width: 100px;
}

.tips {
  width: auto;
  margin: 0 20px 0 5px;
}

button {
  background-color: #b4a078;
  width: 170px;
  height: 50px;
  color: white;
  border: none;
  font-size: 19px;
  margin-right: 20px;
  margin-top: 30px;
}
</style>