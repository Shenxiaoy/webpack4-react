import React from 'react'
import {Input, Modal, Form} from 'antd'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  onCancel = () => {
    this.setState({visible: false})
  }
  onOk = () => {

    this.setState({visible: true})
  }

  render() {
    return <div className="pc-plane-login">
      <Modal
        title="登录"
        visible={this.state.visible}
        onOk={this.onOk}
        onCancel={this.onCancel}
        width="300px"
      >
        <div>
          <Input/> <br/>
          <Input/>
        </div>

      </Modal>
    </div>
  }
}
