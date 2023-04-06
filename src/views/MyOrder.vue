<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 19:16:19
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-05 00:33:04
-->
<template>
  <div class="order-table">
    <el-table :data="orders" :max-height="tableHeight">
      <el-table-column prop="orderId" label="订单号" width="180"></el-table-column>
      <el-table-column prop="customerName" label="客户姓名" width="120"></el-table-column>
      <el-table-column prop="orderDate" label="下单时间" width="180"></el-table-column>
      <el-table-column prop="orderStatus" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="orderTotal" label="订单总价" width="120"></el-table-column>
      <el-table-column prop="action" label="操作" width="120">
        <template #default="scope">
          <el-button type="text" size="small" @click="viewOrder(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="editOrder(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {

}
</script>
<style></style>