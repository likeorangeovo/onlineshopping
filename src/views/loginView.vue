<!--
 * @Descripttion: 
 * @Author: likeorange
 * @Date: 2023-03-28 22:02:42
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-29 21:13:23
-->
<template>
  <div id="background">
    <div id="login">
      <el-form :model="loginForm" class="loginContainer">
        <h3 class="loginTitle" v-if="formState == 1">
          系统登录
        </h3>
        <h3 class="loginTitle" v-if="formState == -1">
          系统注册
        </h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码">
          </el-input>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item v-if="formState == 1">
          <el-button type="primary" style="width: 100%" @click="loginReq">
            Sign in
          </el-button>
        </el-form-item>
        <!-- 注册 -->
        <el-form-item v-if="formState == -1">
          <el-button type="primary" style="width: 100%" @click="registerReq">
            Register
          </el-button>
        </el-form-item>

        <div class="tips">
          <el-button type="text" @click="exchange">登录</el-button>
          <el-button type="text" @click="exchange">注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { login, register } from "../request/index.js"
import errThrow from "../hooks/errThrow.js"
export default {
  name: "loginView",
  setup() {
    let formState = ref(1)
    let loginForm = reactive({
      username: "admin",
      password: "testpassword",
    });
    async function loginReq() {
      const res = await login(JSON.stringify(loginForm))
      return errThrow(res)
    }
    async function registerReq() {
      const res = await register(JSON.stringify(loginForm))
      if (res.data.code == 1) {
        loginForm.password = ''
        formState.value = -formState.value;
      }
      return errThrow(res)
    }
    function exchange() {
      formState.value = -formState.value;
      return;
    }

    return {
      formState,
      loginForm,
      loginReq,
      registerReq,
      exchange
    }
  }
};
</script>

<style scoped>
.loginContainer {
  border-radius: 15px;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: rgb(255, 255, 255);
  text-align: center;
  padding-left: 3%;
  box-shadow: 0 10px 12px -10px rgb(133 133 133 / 60%);
}

.loginTitle {
  margin: 0px auto 48px auto;
  text-align: center;
  font-size: 30px;
}

#background {
  width: 100%;
  height: 100%;
  background-color: #99cccc;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

