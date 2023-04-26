<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 19:06:02
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-08 16:28:07
-->
<template>
  <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="cartItems"
    style="width: 100%">
    <el-table-column prop="list_pic_url" label="商品图片" width="100px">
      <template #default="scope">
        <el-image style="width: 100px; height: 100px" :src="scope.row.list_pic_url"/>
      </template>
    </el-table-column>
    <el-table-column prop="goods_name" label="商品名称" width="auto"></el-table-column>
    <el-table-column prop="retail_price" label="价格" width="100px"></el-table-column>
    <el-table-column prop="number" label="数量" width="100px"></el-table-column>
    <el-table-column prop="total" label="总价" width="100px"></el-table-column>
    <el-table-column label="操作" width="100px">
      <template #default="scope">
        <el-button type="primary" size="small" @click="removeFromCart(scope.row.id,scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="amount"
    style="width: 100%">
    <el-table-column :cell-style="{ textAlign: 'center' }" prop="price" label="应付金额" width="auto">
    </el-table-column>
    <el-table-column prop="" label="" width="100px">
      <template #default="scope">
        <el-button type="primary" size="small" @click="addToOrder(scope)">下单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { getCart, removeCart, addOrder } from "../request/index.js";
import { ElMessage } from 'element-plus';
export default {
  setup() {
    let amount = ref([{
      price: 0
    }])
    let cartItems = ref([])
    onBeforeMount(async () => {
      const cartData = await getCart();
      for(let item of cartData.data.data){
        item.total = item.retail_price * item.number
        amount.value[0].price += item.total
      }
      cartItems.value.push(...cartData.data.data)
    })
    async function removeFromCart(id,index){
      const removeRes = await removeCart({id:id})
      if(removeRes.data.code == 1){
        cartItems.value.splice(index,1)
        return ElMessage({
        message: '删除成功',
        type: 'success',
      })
      }
      return ElMessage({
        message: '删除失败,请稍后重试',
        type: 'warning',
      })
    }
    async function addToOrder() {
      for(const item of cartItems.value){
        await addOrder(JSON.stringify({ 
        goods_id: item.goods_id,
        total_price:item.total,
        price:item.retail_price,
        quantity:item.number,
      }))
        await removeCart({id:item.id})
      }
      cartItems.value = []
    }
    return {
      amount,
      cartItems,
      removeFromCart,
      addToOrder
    }
  }
}
</script>
<style>
.Cart {
  width: 100%;
}

.Cart .cartTableHeader {
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  line-height: 40px;
}

.Cart .cartTableHeader span {
  display: inline-block;
  width: 14%;
}

.Cart .cartTableHeader span:first-child {
  width: 40%;
  text-align: center;
}

.Cart .orderList {
  width: 100%;
}

.Cart .orderList li {
  border: 1px solid black;
  border-top: none;
  font-size: 13px;
}

.Cart .orderList li .orderHeader {
  background-color: #f1f1f1;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
}

.Cart .orderList li .orderHeader .orderTime {
  font-weight: 600;
}

.Cart .orderList li .orderHeader .orderId,
.Cart .orderList li .orderHeader .state {
  margin-left: 10px;
}

.Cart .orderList li .orderDetail {
  width: 100%;
  padding: 10px;
  position: relative;
  overflow: hidden;
}

.Cart .orderList li .orderDetail img {
  width: 84px;
  height: 84px;
  display: inline-block;
}

.Cart .orderList li .orderDetail .goodsName {
  display: inline-block;
  margin-left: 5px;
  width: 230px;
  vertical-align: top;
}

.Cart .orderList li .orderDetail .goodsName p {
  cursor: pointer;
  line-height: 20px;
}

.Cart .orderList li .orderDetail .goodsName p:hover {
  text-decoration: underline;
}

.Cart .orderList li .orderDetail .goodsName span {
  color: black;
  display: block;
  margin-top: 10px;
}

.Cart .orderList li .orderDetail .unitPrice,
.Cart .orderList li .orderDetail .num,
.Cart .orderList li .orderDetail .amount {
  display: inline-block;
  vertical-align: top;
  width: 15%;
  height: 85px;
  line-height: 85px;
  text-align: center;
}

.Cart .orderList li .orderDetail .NumberInput {
  position: relative;
  top: 25px;
}

.Cart .orderList li .orderDetail button {
  position: absolute;
  right: 90px;
  bottom: 40px;
  width: 70px;
  height: 30px;
  border-radius: 3px;
  background-color: black;
  color: white;
  border: none;
}

.Cart .cartFooter {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  border: 1px solid black;
  border-top: none;
  background-color: #f5f5f5;
  position: relative;
}

.Cart .cartFooter span {
  color: black;
  display: inline-block;
  vertical-align: top;
}

.Cart .cartFooter .total {
  color: black;
  font-size: 25px;
  font-weight: 600;
}

.Cart .cartFooter button {
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  background-color: black;
  border: none;
  color: white;
  font-size: 20px;
}
</style>