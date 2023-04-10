<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-04-02 19:10:05
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-10 20:32:20
-->
<template>
  <div class="personal-info">
    <el-form :model="formData" :label-width="formLabelWidth" ref="form">
      <el-form-item label="头像">
        <el-avatar :src="formData.avatar" :size="100"></el-avatar>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="收件人" prop="email">
        <el-input v-model="formData.receiver"></el-input>
      </el-form-item>
      <el-form-item label="收获地址" prop="phone">
        <el-input v-model="formData.address"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-button text @click="dialogFormVisible = true">
          修改密码
        </el-button>
        <el-dialog v-model="dialogFormVisible" title="修改密码">
          <el-form :model="formData">
            <el-form-item label="password" :label-width="formLabelWidth">
              <el-input v-model="formData.password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="repassword" :label-width="formLabelWidth">
              <el-input v-model="formData.repassword" autocomplete="off" />
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button type="primary" @click="changePwd()">
                修改
              </el-button>
            </span>
          </template>
        </el-dialog>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive, ref,onBeforeMount } from 'vue'
import {getUserInfo,updateUserInfo, updatePassword} from '../request/index.js'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const dialogTableVisible = ref(false)
    const dialogFormVisible = ref(false)
    const formLabelWidth = '140px';
    let formData = reactive({
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      username: '',
      phone: '',
      email: '',
      password: '',
      repassword: '',
      receiver: '',
      address:'',
    })
    async function submitForm() {
      await updateUserInfo(JSON.stringify(formData))
    }
    async function changePwd() {
      if(formData.repassword !== formData.password){
        return ElMessage({
        message: '密码不一致',
        type: 'warning',
      })
      }
      await updatePassword(JSON.stringify(formData))
      dialogFormVisible.value = false
    }
    onBeforeMount(async () => {
      const userInfo = await getUserInfo()
      formData.username = userInfo.data.data.username
      formData.phone = userInfo.data.data.phone
      formData.email = userInfo.data.data.email
      formData.receiver = userInfo.data.data.receiver
      formData.address = userInfo.data.data.address
    })
    return {
      formLabelWidth,
      formData,
      dialogTableVisible,
      dialogFormVisible,
      submitForm,
      changePwd
    }
  }
}
</script>
<style></style>