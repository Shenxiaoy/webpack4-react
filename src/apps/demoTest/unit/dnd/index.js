import React, {Component, useState} from 'react'
import Tag from './Hooks'

export default class Dnd extends Component {
  constructor() {
    super()
  }


  render() {
    return <div>
      DND-------------222- <br/>
      <div style={{width: 300,
        height: 300,
        background: 'rgba(0, 0, 0, .1)',
        borderRadius: 3,
        boxSizing: 'border-box',
        transform: 'skew(30deg)',
        marginLeft: 100,
        display: 'flex'
      }}>i can biyeno</div>
      
      <div>
        <Tag></Tag>
        <div><Count></Count></div>
      </div>
    </div>
  }
}

function Count() {
  const [count, setCount] = useState(0)

  return <div>
    计数：{count}
    <p><button onClick={()=>{setCount(count + 1)}}>递增</button></p>
  </div>
}
