/*
 * @Descripttion: state management
 * @Author: likeorange
 * @Date: 2023-04-03 22:58:38
 * @LastEditors: likeorange
 * @LastEditTime: 2023-04-03 22:59:49
 */
import { reactive,ref } from "vue";
export const store = reactive({
  isLogin : false
})
export let recommendId = ref([])