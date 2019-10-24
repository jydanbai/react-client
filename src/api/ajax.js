/**
 * 进行axios的二次封装(ajax请求)
 */
import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '../redux/store'
import { removeUserToken } from '../redux/action-creators/user';
import history from '../history';

//创建一个instance
const instance = axios.create({
  timeout:10000//超时时间为10s
})
//添加请求拦截器
instance.interceptors.request.use(config => {
  console.log('request interceptor onResolved()')
  //显示请求进度
  NProgress.start()

  //将post/put 请求的data对象转化为urlencode格式的字符串数据
  const {data} = config
  if(data instanceof Object){
    config.data = qs.stringify(data)
  }

  //如果有token,添加到请求头中:Authorization
  const token = store.getState().user.token
  if(token){
    config.headers['Authorization'] = 'atguigu_' + token
  }
  return config // 必须返回config
})


//添加响应拦截器
instance.interceptors.response.use(
  response =>{
    console.log('response interceptor onResolved()')

    NProgress.done()
    /**
     * 如果请求成功,判断操作是否成功
     * 如果成功返回成功的data数据,外部具体请求得到需要的数据
     * 如果失败返回携带msg的错误,外部具体请求处理错误
     */
    const result = response.data
    return result
  },
  error =>{
    console.log('response interceptor onRejected()')

    //隐藏请求进度
    NProgress.done()
    /**
     * 统一处理请求异常,外部调用者不用再处理请求出错的情况
     */
    const{ status,data:{msg}={} } = error.response
    //如果status为401,token有问题
    if(status===401){
      if(history.location.pathname !=='/login'){
        //显示提示
        message.error(msg)
        store.dispatch(removeUserToken())
      }
    }else if(status===404){
      message.error('请求资源部存在')
    }else{
      message.error('请求出错:' + error.message)
    }

    //显示请求错误的提示
    //中断promise链,外部不需要在处理请求出错的情况
    return new Promise(() => {})
  }
)


//向外暴露instance
export default instance