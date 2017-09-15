import React from 'react'
import ReactDom from 'react-dom'

// 通用样式
import './static/css/common.less'

import TodoList from './components/TodoList'

// 性能测试
import Perf from 'react-addons-perf'
if (__DEV__) {
    window.Perf = Perf
    console.log('这是测试环境')
}

ReactDom.render(
  <TodoList/>,
  document.getElementById('root')
)
