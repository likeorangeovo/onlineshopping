<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 19:06:02
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-03 22:18:53
-->
<template>
  <div class="Cart">
    <div>
      <div class="cartTableHeader">
        <span>商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>交易操作</span>
      </div>
      <ul class="orderList">
        <li v-for="(item) in orderList" :key="'order'+item.id">
          <div class="orderDetail">
            <img :src="item.goods.img" alt="商品图片" />
            <div class="goodsName">
              <p @click="navTo('/mall/goods/'+item.goods.id)">{item.goods.name}</p>
              <span>{item.goods.spec}</span>
            </div>
            <span class="unitPrice">{'￥'+item.goods.unitPrice}</span>
            <span class="num">
              <!-- <NumberInput 
                @changeHandle="numberChange(item.id)" 
                :initNum="item.temGoodsNum" 
                v-model="item.temGoodsNum" 
                :min="1" 
                :max="999"
              /> -->
            </span>
            <span class="amount">{'￥'+item.amount}</span>
            <button @click="deleteOrder(item.id)">删除</button>
          </div>
        </li>
      </ul>
      <div class="cartFooter">
        <span>应付金额：</span>
        <span class="total">{'￥'+totalAmount}</span>
        <button @click="settleAccounts">下单</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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