/* 
包含多个请求接口的模块
函数的返回值是promise
 */
import ajax from './ajax'

/* 登录 */
export const reqLogin = ({username,password}) => ajax({
  url:'/login',
  method: 'POST',
  data:{username, password}
})
/* 获取用户列表 */
export const reqUsers = () => ajax({
  url:'/manage/user/list',
  method: 'GET',
})