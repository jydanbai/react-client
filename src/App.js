/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-19 10:32:07
 * @LastEditTime: 2019-10-19 15:26:02
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react';
import {HashRouter,BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

export default class App extends Component{

  render() {
    return (
      <HashRouter>
        <Switch> {/* 默认使用不完全匹配|使用第一个匹配的路由 */}
          <Route path="/login" component={Login} exact/>
          <Route path="/" component={Admin}/>
        </Switch>
      </HashRouter>
    )
  }

}
