import React from 'react'
import { render } from 'react-dom'
import './styles.less'
import img1 from './img/1.png'
import {Input, Button, message} from 'antd'
// import Test from '../component/test'
import _ from 'lodash'

class App extends React.Component {
  constructor() {
    super()
  }

  submit = () => {
    message.error('chat')
  }

  render() {
    if(module.hot){
      module.hot.accept()

    }
    return <div className="blog-style">i am a blog
      <span style={{border: '2px solid #ccc'}}>c3ccc</span>
      <p className="img-box">
        <img src={img1} alt=""/>
        <Input/>
        <Button type="primary" onClick={this.submit}>确定</Button>
      </p>
    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)



