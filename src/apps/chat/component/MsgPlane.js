import React from 'react'
import API from 'apis'
import {} from 'antd'
import RoomList from './RoomList'
import MsgContent from './MsgContent'
import utils from 'utils'
import './styles.less'

const socket = API.socket


export default class MsgPlane extends React.Component {
  constructor() {
    super()
    this.state = {
      curUser: '',
      onlineHeight: 1,
    }
  }

  componentDidMount() {

    //用户id、临时用户id处理
    const {getCookie, setCookie} = utils
    let interimName = getCookie('interimName')

    if(interimName) {
      this.setState({curUser: interimName})
    } else {
      const curTime = + new Date()
      const lastIcon = Math.floor(Math.random()*1000)
      interimName = curTime + lastIcon.toString()
      setCookie('interimName', interimName, 1)
      this.setState({curUser: interimName})
    }

    socket.emit('onlineUsers', {interimName: interimName})
    socket.on('onlineHeight', (data) => {
      console.log(data, 'vvvvvv')
      this.setState({mans: data.mans})
    })
  }

  pageCloseCallback() {
    const id = this.state.curUser
    window.onbeforeunload  = function() {
      socket.emit('leaveChat', {id})
    }
  }

  render() {
    this.pageCloseCallback()

    return <div className="chat-window">
      <RoomList />
      <MsgContent
        curUser={this.state.curUser}
        mans={this.state.mans}
      />
    </div>
  }
}
