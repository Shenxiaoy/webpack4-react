import React from 'react'
import { render } from 'react-dom'

import Branch from './components/Branch'
import './styles.less'

const base64progress = function base64progress(p) {
  console.info(p);
};

const getRes = function getRes(res) {
  if(res){
    console.info("上传成功", res);
  }else{
    console.info("上传失败")
  }
};

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bigMan: '所罗门',
      miracle: '哥'
    }
  }

  componentDidMount() {
    this.setState({miracle: '奇迹哥--'})
  }

  render() {
    console.log('god-------------')
    const {bigMan, miracle} = this.state
    return <div>
      <div>我相信我是老大——{bigMan}</div>
      <br/><br/><br/>
      <Branch miracle={miracle}/>
    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)


