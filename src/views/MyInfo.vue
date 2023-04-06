<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 19:10:05
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-02 19:10:16
-->
<template>
  <div class="personal-info">
    <el-form :model="formData" :rules="rules" :label-width="formLabelWidth" ref="form">
      <el-form-item label="头像">
        <el-avatar :src="formData.avatar" :size="100"></el-avatar>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="formData.nickname"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="formData.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-date-picker type="date" v-model="formData.birthday" placeholder="请选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="职业" prop="occupation">
        <el-input v-model="formData.occupation"></el-input>
      </el-form-item>
      <el-form-item label="个人简介" prop="introduction">
        <el-input type="textarea" v-model="formData.introduction"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  setup(){
    let formLabelWidth = '100px';
    let formData = {
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        nickname: '张三',
        name: '张三',
        gender: 'male',
        birthday: '',
        occupation: '工程师',
        introduction: ''
      }
    return {
      formLabelWidth,
      formData
    }
  }
}
</script>
<style>
  
</style>