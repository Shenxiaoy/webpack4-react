import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'test1',
      age: 1
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {name: 'sss'}
  // }

  componentDidCatch(err, info) {
    console.log(err, info, '000000000000')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {ins: 'iii'}
  }

  componentDidUpdate(a, b, c) {

    this.state.age = 888
  }

  onClick = () => {
    this.setState({age: this.state.age + 1})
  }

  componentDidMount() {
  }

  render() {

    return <div>
      test1
      <p><button onClick={this.onClick}>bbb</button></p>
      <div style={{color: 'red'}}>
        {this.state.name}
        {this.state.age}
      </div>
    </div>
  }
}