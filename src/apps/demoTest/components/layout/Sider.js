import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import {hashHistory} from 'react-router-dom'
import { menuData, getMenuIcon } from './menuData'

const {SubMenu} = Menu
const { Sider } = Layout

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
      crumb: []
    }
  }
  
  // 给左侧菜单添加 固定定位的样式
  addFixedStyle() {
    const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
    const menuObj = document.getElementById('menuFixed')
    if(scrollTop > 55) {
      menuObj.classList.add('menu-fixed-add')
    } else {
      menuObj.classList.remove('menu-fixed-add')
    }
  }

  componentDidMount() {
    const that = this
    window.onscroll = function(e) {
      that.addFixedStyle()
    }
  }

  onCollapse = async (collapsed) => {
    
    //防异步处理，最后把样式类添加上去
    await this.setState({collapsed})
    this.addFixedStyle()
  }

  getMenuList(data, parent) {
    if(!data) { return }

    return data.map((item, index) => {
      if(item.list && item.list.length) {
        return (
          <SubMenu key={item.remark} title={<span><Icon type={getMenuIcon(item.remark)} /><span>{item.name}</span></span>}>
            { this.getMenuList(item.list, item) }
          </SubMenu>
        )
      } else {
        return <Menu.Item key={item.remark} parent={parent} cur={item}><Icon type={getMenuIcon(item.remark)} /><span>{item.name}</span></Menu.Item>
      }
    })

  }

  handleMenuClick = (e) => {
    this.state.crumb = []
    const cur = e.item.props.cur
    this.getCrumbName(menuData, cur.remark)
    this.state.crumb.reverse()
    this.props.onMenuChange(this.state.crumb)


    const leg = /\/(.*)\.html/
    const pathName = location.pathname.match(leg)[1] || ''
    window.location = pathName + '.html#' + cur.link + '?'

  }

  // 递归反向查询菜单名称
  getCrumbName(data, key, parent) {
    data.find(item => {
      if(item.remark === key) {

        this.state.crumb.push(item.name)
        if(parent && parent.remark) {
          this.getCrumbName(menuData, parent.remark )
        }
        return item.remark === key
      } else if(item.list && item.list.length) {
        this.getCrumbName(item.list, key, item)
      }

    })
  }

  render() {

    return (
      <Sider
        className="sider-left"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu
          id="menuFixed"
          mode="inline"
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0}}
          onClick={this.handleMenuClick}
        >
          {this.getMenuList(menuData)}
        </Menu>
      </Sider>
    )
  }
}