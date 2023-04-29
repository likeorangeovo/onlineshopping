<!--
 * @Descripttion: goodDetail
 * @Author: likeorange
 * @Date: 2023-04-01 17:37:24
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-30 00:10:01
-->
<template >
  <div class="goodInfo" v-if="isDataLoaded">
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

  <div class="like" v-if="isDataLoaded">
    猜你喜欢
  </div>
  <div class="recommend-products" v-if="isDataLoaded">
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.list_pic_url" alt="product image" style="height: 250px; width: auto;">
      <div class="product-details">
        <div class="product-name">{{ product.name }}</div>
        <div>{{ product.goods_brief }}</div>
        <div class="product-price">{{ '¥' + product.retail_price }}</div>
        <el-button type="primary" class="product-buy" @click="navTo(product.id)">查看详情</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { onBeforeMount, ref } from 'vue'
import { goodDetail, addCart, addOrder, getRecommendGoods } from "../request/index.js"
import { useRoute,useRouter } from 'vue-router'
import { store, recommendId } from "../request/store.js"
import errThrow from "../hooks/errThrow.js";
export default {
  setup() {
    let num = ref(1)
    let good = ref({})
    let isDataLoaded = ref(false)
    let products = ref([])
    const route = useRoute()
    const router = useRouter()
    const handleChange = () => {
      console.log(1)
    }
    onBeforeMount(async () => {
      const goodDetailRes = await goodDetail({ id: route.params.id })
      good.value = { ...goodDetailRes.data.data }
      const recommendGoodsInfo = await getRecommendGoods(JSON.parse(recommendId.value))
      products.value = recommendGoodsInfo.data.data
      isDataLoaded.value = true
    })
    async function addToCart() {
      const addCartRes = await addCart(JSON.stringify({
        id: good.value.id,
        name: good.value.name,
        retail_price: good.value.retail_price,
        goods_number: num.value,
        list_pic_url: good.value.list_pic_url,
      }))
      errThrow(addCartRes)
    }
    async function addToOrder() {
      const addOrderRes = await addOrder(JSON.stringify({
        goods_id: good.value.id,
        total_price: good.value.retail_price,
        price: good.value.retail_price,
        quantity: num.value,
      }))
      errThrow(addOrderRes)
    }
    const navTo = function (id) {
      if (store.isLogin) {
        router.push({
          name: 'GoodsDetail',
          params: {
            id: id,
          },
        });
        window.location.reload()
        return;
      }
      return router.push({
        name: 'login'
      });
    }
    return {
      num,
      good,
      products,
      isDataLoaded,
      addToCart,
      addToOrder,
      handleChange,
      navTo
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



.recommend-products {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px 600px 60px 60px;
}

.product {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  width: 70%;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
}

.product-price {
  margin-top: 5px;
  font-size: 14px;
  color: #f60;
}
.like{
  margin: 60px 600px 20px 100px;
  font-size: 30px;
  font-weight: bold;

}
</style>