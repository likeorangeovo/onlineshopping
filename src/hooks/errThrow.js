/*
 * @Descripttion: a hook to deal with throwing error
 * @Author: likeorange
 * @Date: 2023-03-29 19:43:17
 * @LastEditors: likeorange
 * @LastEditTime: 2023-03-30 17:21:06
 */

import { ElMessage } from 'element-plus'

export default function (params) {
  try {
    if (params.code == 0) {
      throw params.msg;
    }
    return function(){
      ElMessage({
        message: params.msg,
        type: 'success',
      })
    }
  } catch (error) {
    return function(){
      ElMessage({
        message: params.msg,
        type: 'warning',
      })
    }
  }
}