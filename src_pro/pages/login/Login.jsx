import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less'
import logo from './images/logo.png'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {username,password} = values
        console.log('提交登录请求: ',values);
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
const LoginWrap = Form.create()(Login);

export default LoginWrap;