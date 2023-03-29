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