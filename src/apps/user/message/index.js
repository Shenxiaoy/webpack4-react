import React from 'react'
import Test1 from './test1'

export default class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      mall: 'k'
    }
    this.testRefs = React.createRef()

  }

  onClick = () => {
    // this.testRefs.setState({name: 'fffffff'})
    console.log(this.testRefs.current.state, 'ggg')
  }

  render() {
    const mall = {
      name: 11,
      age: 11
    }

    return <div>
      message
      <p>{this.state.mall}</p>
      <button onClick={this.onClick}>refresh</button>
      <Test1 type={mall} ref={this.testRefs}/>
    </div>
  }
}