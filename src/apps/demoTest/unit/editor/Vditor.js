import React from 'react'
import Vditor from 'vditor'
// import 'vditor/dist/index.classic.css'

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
      333
    </div>
  }
}