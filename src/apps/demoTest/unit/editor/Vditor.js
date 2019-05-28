import React from 'react'
import Vditor from 'vditor'
import 'vditor/dist/index.classic.css'

export default class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const options = {cache: true}
    const vditor = new Vditor('kk')
    vditor.focus()
  }

  render() {
    return <div id="kk">
      {/*<Vditor />*/}
      <p style={{color: '#ccc'}}>markdown editor <a href="https://hacpai.com/article/1549638745630?r=Vanessa" target="_blank">使用指南</a></p>
    </div>
  }
}