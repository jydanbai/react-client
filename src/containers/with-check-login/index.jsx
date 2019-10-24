/* 
封装一个用于检查用户登录的高阶组件
 */
import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
export default function WithCheckLogin(WrappedComponent) { //被包装组件WrappedComponent
  //高阶组件函数返回一个新的组件
  @connect(state => ({hasLogin: state.user.hasLogin}))
  class HocComponent extends React.Component{
    render(){
      //如果请求的是login,但是已经登录,自动跳转到admin
      //如果请求的不是login,但没有登录,自动跳转到login
      const path = this.props.location.pathname
      const {hasLogin, ...rest} = this.props
      if(path==='/login' && hasLogin) return <Redirect to="/"/>
      if(path!=='/login' && !hasLogin) return <Redirect to="/login"/>

      //将所有接收的属性传递给包装组件
      return <WrappedComponent {...rest}/>
    }
  }
  return HocComponent
}