/**
 * 登陆的一级路由组件
 */
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux';

import {loginAsync} from '../../redux/action-creators/user';
import './index.less'
import logo from './images/logo.png'
import WithCheckLogin from '../with-check-login';



@connect(
  state => ({}),  // 用于显示的一般属性
  {loginAsync} // 用于更新状态的函数属性
)
@Form.create()    // FormLogin = Form.create()(CheckLogin)
@WithCheckLogin  // CheckLogin = WithCheckLogin(Login)
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, {username, password}) => {
      if (!err) {
        console.log('提交登录请求: ',{username, password})

        this.props.loginAsync(username,password)
        // ajax.post('/login', values)
        //   .then(result => {
        //     const {status, data: {user, token}={}, msg, xxx='abc'} = result
        //     if(status===0){
        //       console.log('登录成功',user, token)
        //     }else{
        //       console.log('登陆失败',msg)

        //     }
        //   })
        //   .catch(error=>{

        //   })

      }else{

      }
    });
    //读取form收集的数据
    // const form = this.props.form
    // const username = form.getFieldValue('username')
    // const password = form.getFieldValue('password')
    // const values = form.getFieldValue.values

  }
  onChange = e => {
    console.log(e);
  };
  validatePwd=(rule,value,callback)=>{

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt=""/>
          <h1>后台管理系统</h1>
        </header>
      
        <div className="login-content">
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '请输入用户名!' },
                  { min: 4, message: '用户名不能小于4位!' },
                  { max: 12, message: '用户名不能大于12位!' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、字母或下划线组成!' },
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  allowClear 
                  onChange={this.onChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入密码!' },
                  { min: 4, message: '密码不能小于4位!' },
                  { max: 12, message: '密码不能大于12位!' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、字母或下划线组成!' },
                ],
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  allowClear 
                  onChange={this.onChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}


// export default connect(
//   state => ({hasLogin: state.user.hasLogin}),//用于显示的一般属性
//   {loginAsync}//用于更新状态的函数属性
// )(Form.create()(Login))
export default Login