import React from 'react'
import {Input, Icon, Button} from 'antd'
import io from 'socket.io-client'
import './styles.less'

const socket = io('http://localhost:9991')

export default class RoomList extends React.Component {
  constructor() {
    super()
    this.state = {
      roomMsg: [],
      roomName: 'root'
    }
  }

  handleSend() {
    console.log(this.refs.inputMsg.value)
    const value = this.refs.inputMsg.value
    const {roomName} = this.state
    this.refs.inputMsg.value = ''
    socket.emit('sendMsg', {value, roomName: roomName, type: 'receive'})
    this.state.roomMsg.push({value, type: 'send'})
    this.setState({roomMsg: this.state.roomMsg})
    this.scrollBottom()
  }

  componentDidMount() {
    this.scrollBottom()

    socket.on('connect', (socket) => {})

    socket.on('receiveMsg', data => {
      console.log(111)
      this.state.roomMsg.push(data)
      this.setState({roomMsg: this.state.roomMsg})
    })

    socket.emit('joinRoom', {roomName: this.state.roomName})
  }

  scrollBottom() {
    this.refs.messageWrap.scrollTop = this.refs.messageWrap.scrollHeight
  }

  messageRender(ary) {
    return ary.map(item => {
      if(item.type === 'receive') {
        return <span key={item.value} className="message-left"><span>{item.value}</span></span>
      } else if(item.type === 'send') {
        return <span key={item.value} className="message-right"><span>{item.value}</span></span>
      } else {
        return <span key={item.value} className="message-right"><span>这是推送：{item.value}</span></span>
      }
    })
  }

  render() {
    console.log(this.state.roomMsg)

    return <div className="msg-content">
      <div ref="messageWrap" className="msg-wrap">
        {
          this.messageRender(this.state.roomMsg)
        }
      </div>
      <div className="send-message">
        <input ref="inputMsg" style={{width: '80%', marginRight: 10}}/>
        <Button type="primary" onClick={this.handleSend.bind(this)}>发送</Button>
      </div>
    </div>
  }
}
