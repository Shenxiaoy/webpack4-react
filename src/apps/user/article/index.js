import React from 'react'

export default class Article extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 1
    }
  }

  static getDerivedStateFromProps(preProps, preState) {
    console.log('derived')
    return {num: 'dd'}
  }

  click = (e) => {
    this.setState({num: this.state.num+1})
  }

  render() {
    console.log(111, this.state.num)
    return <div>
      Article {this.state.num}
      <p><button onClick={this.click}>点击</button></p>
    </div>
  }
}