/**
 * 应用根组件
 */
import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './containers/login/Login';
import Admin from './containers/admin/Admin';

export default class App extends Component{

  render() {
    return (
      <BrowserRouter>
        <Switch> {/* 默认使用不完全匹配|使用第一个匹配的路由 */}
          <Route path="/login" component={Login} exact/>
          <Route path="/" component={Admin}/>
        </Switch>
      </BrowserRouter>
    )
  }

}
