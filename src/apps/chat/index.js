import React from 'react'
import { render } from 'react-dom'
import './styles.less'
import {Input, Button, message} from 'antd'
// import io from 'socket.io-client'
import MsgPlane from './component/MsgPlane'

// const socket = io('http://localhost:9991')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: [],
      roomMsg: []
    }
  }
  render() {
    if(module.hot){
      module.hot.accept()

    }

    return <div className="blog-style">
      <MsgPlane />

    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)



