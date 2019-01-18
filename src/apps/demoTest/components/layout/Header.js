import React, {Component} from 'react'
import {Icon, Layout} from 'antd'
import './styles.less'

const {Header} = Layout

export default class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return <div>
      <Header className="header-top">
        <div className="header-logo"><Icon type="twitter" /></div>
        <div className="menu-right">
          <span>用户: 影魔</span>
          <span className="header-img"><Icon type="wechat" /></span>
        </div>
      </Header>
    </div>
  }
}