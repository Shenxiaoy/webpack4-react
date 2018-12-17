import React from 'react'
import {Icon} from 'antd'

export default class Branch extends React.Component {
  constructor() {
    super()
    this.state ={
      hero: '小仙女'
    }
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({hero: '影魔'})
    }, 1000)
  }

  render() {
    console.log('children=====================')
    return <div>
      <p>{this.props.miracle}</p>
      <br/>
      <p>{this.state.hero}</p>
    </div>
  }
}