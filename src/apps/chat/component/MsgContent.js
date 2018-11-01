import React from 'react'
import {Input, Icon, Button} from 'antd'
import io from 'socket.io-client'
import './styles.less'

const socket = io('139.199.98.207:9991')
const {TextArea} = Input

export default class RoomList extends React.Component {
  constructor() {
    super()
    this.state = {
      roomMsg: [],
      roomName: 'root',
      sendValue: ''
    }
  }

  async handleSend() {
    const {sendValue} = this.state
    if(!sendValue) {
      return
    }


    const value = sendValue
    const {roomName} = this.state

    socket.emit('sendMsg', {value, roomName: roomName, type: 'receive'})
    this.state.roomMsg.push({value, type: 'send'})
    await this.setState({roomMsg: this.state.roomMsg, sendValue: ''})
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

  onChange = (e) => {
   this.setState({sendValue: e.target.value})
  }

  render() {

    return <div className="msg-content">
      <div ref="messageWrap" className="msg-wrap">
        {
          this.messageRender(this.state.roomMsg)
        }
      </div>
      <div className="send-message">
        {/*<Input*/}
          {/*ref="inputMsg"*/}
          {/*style={{width: '90%', marginRight: 10}}*/}
          {/*onChange={this.onChange}*/}
          {/*value={this.state.sendValue}*/}
          {/*onPressEnter={this.handleSend.bind(this)}*/}
        {/*/>*/}

        <TextArea
          ref="inputMsg"
          style={{width: '90%', marginRight: 10}}
          onChange={this.onChange}
          value={this.state.sendValue}
          onPressEnter={this.handleSend.bind(this)}
        />

        <Button size='small' type="primary" onClick={this.handleSend.bind(this)}>发送</Button>
      </div>
    </div>
  }
}
