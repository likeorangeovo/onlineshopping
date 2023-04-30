<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 19:16:19
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-30 20:31:29
-->
<template>
  <el-tabs v-model="activeName" stretch='true'>
    <el-tab-pane  label="全部" name="allorders">
    <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="orderInfo">
      <el-table-column prop="order_id" label="订单号" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="120">
        <template #default="scope">
        <el-image style="width: 80px; height: 100px" :src="scope.row.image"/>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="auto"></el-table-column>
      <el-table-column prop="quantity" label="商品数量" width="120"></el-table-column>
      <el-table-column prop="time" label="下单时间" width="120"></el-table-column>
      <el-table-column prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="total_price" label="总价" width="120"></el-table-column>
      <el-table-column prop="" label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" v-if="scope.row.status==0" size="small" @click="change(scope.row.status,scope.row.order_id)">付款</el-button>
          <el-button type="primary" v-if="scope.row.status==1" size="small">等待收货</el-button>
          <el-button type="primary" v-if="scope.row.status==2" size="small" @click="change(scope.row.status,scope.row.order_id)">确认收货</el-button>
          <el-button type="primary" v-if="scope.row.status==3" size="small">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-tab-pane>

  <el-tab-pane  label="未付款" name="unpaid">
    <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="unpaid">
      <el-table-column prop="order_id" label="订单号" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="120">
        <template #default="scope">
        <el-image style="width: 80px; height: 100px" :src="scope.row.image"/>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="auto"></el-table-column>
      <el-table-column prop="quantity" label="商品数量" width="120"></el-table-column>
      <el-table-column prop="time" label="下单时间" width="120"></el-table-column>
      <el-table-column prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="total_price" label="总价" width="120"></el-table-column>
      <el-table-column prop="" label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" v-if="scope.row.status==0" size="small" @click="change(scope.row.status,scope.row.order_id)">付款</el-button>
          <el-button type="primary" v-if="scope.row.status==1" size="small">等待收货</el-button>
          <el-button type="primary" v-if="scope.row.status==2" size="small" @click="change(scope.row.status,scope.row.order_id)">确认收货</el-button>
          <el-button type="primary" v-if="scope.row.status==3" size="small">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-tab-pane>

  <el-tab-pane  label="未发货" name="unshipped">
    <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="unshipped">
      <el-table-column prop="order_id" label="订单号" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="120">
        <template #default="scope">
        <el-image style="width: 80px; height: 100px" :src="scope.row.image"/>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="auto"></el-table-column>
      <el-table-column prop="quantity" label="商品数量" width="120"></el-table-column>
      <el-table-column prop="time" label="下单时间" width="120"></el-table-column>
      <el-table-column prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="total_price" label="总价" width="120"></el-table-column>
      <el-table-column prop="" label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" v-if="scope.row.status==0" size="small" @click="change(scope.row.status,scope.row.order_id)">付款</el-button>
          <el-button type="primary" v-if="scope.row.status==1" size="small">等待收货</el-button>
          <el-button type="primary" v-if="scope.row.status==2" size="small" @click="change(scope.row.status,scope.row.order_id)">确认收货</el-button>
          <el-button type="primary" v-if="scope.row.status==3" size="small">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-tab-pane>

  <el-tab-pane  label="已发货" name="shipped">
    <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="shipped">
      <el-table-column prop="order_id" label="订单号" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="120">
        <template #default="scope">
        <el-image style="width: 80px; height: 100px" :src="scope.row.image"/>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="auto"></el-table-column>
      <el-table-column prop="quantity" label="商品数量" width="120"></el-table-column>
      <el-table-column prop="time" label="下单时间" width="120"></el-table-column>
      <el-table-column prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="total_price" label="总价" width="120"></el-table-column>
      <el-table-column prop="" label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" v-if="scope.row.status==0" size="small" @click="change(scope.row.status,scope.row.order_id)">付款</el-button>
          <el-button type="primary" v-if="scope.row.status==1" size="small">等待收货</el-button>
          <el-button type="primary" v-if="scope.row.status==2" size="small" @click="change(scope.row.status,scope.row.order_id)">确认收货</el-button>
          <el-button type="primary" v-if="scope.row.status==3" size="small">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-tab-pane>

  <el-tab-pane  label="已完成" name="completed">
    <el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="completed">
      <el-table-column prop="order_id" label="订单号" width="150"></el-table-column>
      <el-table-column prop="image" label="商品图片" width="120">
        <template #default="scope">
        <el-image style="width: 80px; height: 100px" :src="scope.row.image"/>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="auto"></el-table-column>
      <el-table-column prop="quantity" label="商品数量" width="120"></el-table-column>
      <el-table-column prop="time" label="下单时间" width="120"></el-table-column>
      <el-table-column prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="total_price" label="总价" width="120"></el-table-column>
      <el-table-column prop="" label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" v-if="scope.row.status==0" size="small" @click="change(scope.row.status,scope.row.order_id)">付款</el-button>
          <el-button type="primary" v-if="scope.row.status==1" size="small">等待收货</el-button>
          <el-button type="primary" v-if="scope.row.status==2" size="small" @click="change(scope.row.status,scope.row.order_id)">确认收货</el-button>
          <el-button type="primary" v-if="scope.row.status==3" size="small">已完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-tab-pane>

  
  </el-tabs>
</template>
<script>
import { getOrder, changeStatus } from "../request/index.js"
import { onBeforeMount, ref, computed } from 'vue'
export default {
  setup(){
    const activeName = ref('allorders')
    let orderInfo = ref([])
    let unpaid = computed(()=>{
      let res = []
      for (let item of orderInfo.value) {
        if (item.status == 0) {
          item.msg = '待付款'
          res.push(item)
        }
      }
      return res
    })
    let unshipped = computed(()=>{
      let res = []
      for (let item of orderInfo.value) {
        if (item.status == 1) {
          item.msg = '发货'
          res.push(item)
        }
      }
      return res
    })
    let shipped = computed(()=>{
      let res = []
      for (let item of orderInfo.value) {
        if (item.status == 2) {
          item.msg = '待收货'
          res.push(item)
        }
      }
      return res
    })
    let completed = computed(()=>{
      let res = []
      for (let item of orderInfo.value) {
        if (item.status == 3) {
          item.msg = '已完成'
          res.push(item)
        }
      }
      return res
    })
    onBeforeMount(async ()=> {
      const orderRes = await getOrder()
      orderInfo.value = orderRes.data.data
      console.log(orderInfo.value)
      for(let item of orderInfo.value){
        /*0未付款，1已付款未发货，2已发货未确认收到，3确认到货订单完成*/
        if(item.status == 0){
          item.state = '未付款'
        }
        else if(item.status == 1){
          item.state = '未发货'
        }
        else if(item.status == 2){
          item.state = '已发货'
        }
        else if(item.status == 3){
          item.state = '已完成'
        }
      }
    }
    )
    async function change(status,id) {
      await changeStatus({status:status+1,id:id})
      for(let item of orderInfo.value){
        if(item.order_id == id ){
          item.status += 1;
          if(item.status == 0){
          item.state = '未付款'
        }
        else if(item.status == 1){
          item.state = '未发货'
        }
        else if(item.status == 2){
          item.state = '已发货'
        }
        else if(item.status == 3){
          item.state = '已完成'
        }
          break;
        }
      }
    }
    return {
      activeName,
      orderInfo,
      unpaid,
      unshipped,
      shipped,
      completed,
      change
    }
  }
}
</script>
<style scoped>
</style>