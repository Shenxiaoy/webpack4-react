import React from 'react'
import {Input, Icon, Button, Upload} from 'antd'
import API from 'apis'
import './styles.less'

const socket = API.socket
const {TextArea} = Input

export default class RoomList extends React.Component {
  constructor() {
    super()
    this.state = {
      roomMsg: [],
      roomName: 'root',
      sendValue: '',
      img: ''
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

    socket.on('receiveMsg', data => {
      this.state.roomMsg.push(data)
      this.setState({roomMsg: this.state.roomMsg})
      this.scrollBottom()
    })

    socket.emit('joinRoom', {roomName: this.state.roomName})
  }

  scrollBottom() {
    this.refs.messageWrap.scrollTop = this.refs.messageWrap.scrollHeight
  }

  messageRender(ary) {
    return ary.map(item => {
      if(item.type === 'receive') {
        return <div key={item.value} className="message-left">

          <span>{item.value}</span>
        </div>
      } else if(item.type === 'send') {
        return <div key={item.value} className="message-right">
          <p style={{fontSize: 10, color: '#DEB887'}}>{this.props.curUser}</p>
          <span>{item.value}</span>
        </div>
      } else {
        return <div key={item.value} className="message-right"><span>这是推送：{item.value}</span></div>
      }
    })
  }

  messageStyle() {
    const row = <div key={item.value} className="message-left">

    </div>
  }

  onChange = (e) => {
   this.setState({sendValue: e.target.value})
  }

  render() {
    const that = this
    const uploadProps = {
      name: 'file',
      action: '//localhost:9991/upload',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if(info.file.status === 'done') {
          // window.open('//localhost:9991/upload1', '_blank')
        }
      },
      // fileList: []

    }

    return <div className="msg-content">
      <div className="top-line-message">用户：{this.props.curUser}，在线：{this.props.mans}</div>
      <div ref="messageWrap" className="msg-wrap">
        {
          this.messageRender(this.state.roomMsg)
        }
      </div>
      <div className="send-message">

        {/*<div style={{marginLeft: 10}}>*/}
          {/*<Upload*/}
            {/*{...uploadProps}*/}
          {/*>*/}
            {/*<Icon type="picture" theme="outlined" />*/}
          {/*</Upload>*/}

        {/*</div>*/}

        <TextArea
          ref="inputMsg"
          style={{width: '100%', marginRight: 10}}
          onChange={this.onChange}
          value={this.state.sendValue}
          onPressEnter={this.handleSend.bind(this)}
        />
        <div className='btn-send'>
          <Button size='small' type="danger" onClick={this.handleSend.bind(this)}>发送</Button>
        </div>
      </div>

    </div>
  }
}


