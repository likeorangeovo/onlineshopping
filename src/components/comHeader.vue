<!--
 * @Descripttion: a component to the mall header
 * @Author: likeorange
 * @Date: 2023-03-28 16:39:17
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-10 23:36:16
-->
<template>
  <div class="search">
    <el-input placeholder="请输入内容" v-model="content">
      <template #suffix>
        <el-icon class="el-input__icon" @click='searchGood(content)'>
          <Search />
        </el-icon>
      </template>
    </el-input>
  </div>

  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
    <el-menu-item index="/mall/show">首页</el-menu-item>
    <el-sub-menu :index=item.id v-for="item in mainCatrgory" :key="item.id">
      <template #title>{{ item.name }}</template>
      <el-menu-item :index="'/mall/show/goodsList/' + sub.id" v-for="( sub ) in item.sub" :key="sub.id">{{ sub.name
      }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { category } from "../request/index.js"
import { useRouter } from 'vue-router'
export default {
  setup() {
    const content = ref('')
    const activeIndex = ref('1')
    let mainCatrgory = ref([])
    let index = ref(2)
    const router = useRouter()
    let handleSelect = function () {
      return;
    }
    function searchGood(content) {
      if(content != ''){
        return router.replace({
        name: 'SearchGood', 
        params:{
          content: content
        }
      })
      }
    }
    onBeforeMount(async () => {
      const categoryRes = await category()
      for (let item of categoryRes.data.data) {
        if (item.level == 'L1') {
          item.sub = []
          item.index = index.value
          index.value += 1
          for (let sub of categoryRes.data.data) {
            if (sub.parent_id == item.id) {
              item.sub.push(sub)
            }
          }
          mainCatrgory.value.push(item)
        }
      }
    })
    return {
      content,
      activeIndex,
      handleSelect,
      mainCatrgory,
      searchGood
    }
  }
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}

.search {
  display: flex;
  height: 6vh;
  font-size: 3vh;
  margin: 1% 20%;
}

:deep(.el-input) {
  font-size: 100%;
  line-height: 100%;
}
</style>