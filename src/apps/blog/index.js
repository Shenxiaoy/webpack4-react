import React from 'react'
import { render } from 'react-dom'
import './styles.less'
import {Input, Button, message} from 'antd'
import io from 'socket.io-client'
import MsgPlane from './component/MsgPlane'

const socket = io('http://localhost:9991')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: [],
      roomMsg: []
    }
  }

  submit = async () => {
    const value = this.refs.sendMessage.value
    this.refs.sendMessage.value = ''
    socket.emit('sendMsg', {value, roomName: 'four'})
    // this.state.message.push({value})
    // this.setState({message: this.state.message})
  }

  joinFour = () => {
    const json = {roomName: 'four'}
    socket.emit('joinRoom', json)
  }

  leaveFour = () => {
    const json = {roomName: 'four'}
    socket.emit('leaveRoom', json)
  }

  // componentDidMount() {
  //   socket.on('connect', (socket) => {})
  //
  //   socket.on('message', (data) => {
  //     this.state.message.push(data)
  //     this.setState({message: this.state.message})
  //   })
  //
  //   socket.on('receiveMsg', data => {
  //     console.log(data, '------')
  //     this.state.roomMsg.push(data)
  //     this.setState({roomMsg: this.state.roomMsg})
  //   })
  // }

  render() {
    if(module.hot){
      module.hot.accept()

    }

    return <div className="blog-style">
      <MsgPlane />
      {/*<p>*/}
        {/*<input ref="sendMessage" /><br/>*/}
        {/*<Button type="primary" onClick={this.submit}>发送</Button>*/}
        {/*<Button type="danger" onClick={this.joinFour}>加入房间</Button>*/}
        {/*<Button type="danger" onClick={this.leaveFour}>离开房间</Button>*/}
      {/*</p>*/}
      {/*<br/>*/}
        {/*<ul>*/}
          {/*{*/}
            {/*this.state.roomMsg.length > 0 && this.state.roomMsg.map((item, index) => {*/}
              {/*return <li key={index}>{item.value}</li>*/}
            {/*})*/}
          {/*}*/}
        {/*</ul>*/}
      {/*<br/>*/}
      {/*<ul>*/}
        {/*{*/}
          {/*this.state.message.length > 0 && this.state.message.map((item, index) => {*/}
            {/*return <li key={index}>{item.value}</li>*/}
          {/*})*/}
        {/*}*/}
      {/*</ul>*/}

    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)



