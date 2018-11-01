import React from 'react'
import { render } from 'react-dom'
import Test from '../component/test'
import {Modal} from 'antd'
import './styles.less'

class App extends React.Component {

  render() {
    return <div>
      <Modal
        title="111111"
        okButtonProps={{ loading: true }}
        visible={true}
      >
        呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿
      </Modal>
    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)


