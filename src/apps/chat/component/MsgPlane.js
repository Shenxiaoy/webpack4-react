import React from 'react'
import {} from 'antd'
import RoomList from './RoomList'
import MsgContent from './MsgContent'
import './styles.less'

export default class MsgPlane extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div className="chat-window">
      <RoomList />
      <MsgContent />
    </div>
  }
}
