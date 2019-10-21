/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-19 11:06:30
 * @LastEditTime: 2019-10-19 11:32:29
 * @LastEditors: Please set LastEditors
 */
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  //添加less-loader对应的配置 ==>修改primary 默认颜色
  addLessLoader({ 
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
  }),
);
