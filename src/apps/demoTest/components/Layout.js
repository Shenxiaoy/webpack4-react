import React, {Component} from 'react'
import {Layout, Breadcrumb, Divider} from 'antd'
import Header from './layout/Header'
import Sider from './layout/Sider'

const {Content} = Layout

export default class DemoLayout extends Component {
  constructor() {
    super()
    this.state = {
      crumbs: []
    }

  }

  componentDidMount() {
   window.onscroll = function(e) {
     const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
     const menuObj = document.getElementById('menuFixed')
     if(scrollTop > 55) {
       menuObj.classList.add('menu-fixed-add')
     } else {
       menuObj.classList.remove('menu-fixed-add')
     }

   }
  }

  onMenuChange = (data) => {
    this.setState({
      crumbs: data
    })
  }

  // 头部面包屑
  showCrumb(crumbs) {
    if(crumbs.length) {
      return (
        <Breadcrumb style={{ margin: '12px 0' }}>
          {crumbs.map((crumb, $index) => {
            return <Breadcrumb.Item key={$index}>{crumb}</Breadcrumb.Item>
          })}
        </Breadcrumb>
      )
    } else {
      return ''
    }
  }

  render() {
    const {crumbs} = this.state

    return (
      <Layout>
        <Header />
        <Layout style={{ minHeight: '100vh', marginTop: 5 }}>
          <Sider
            onMenuChange={this.onMenuChange}
          />
          <Layout style={{marginLeft: 10}}>
            {this.showCrumb(crumbs)}

            <Content style={{margin: 5, background: '#fff', padding: 15}}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}