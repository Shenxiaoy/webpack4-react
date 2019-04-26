import React, {Component} from 'react'

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
    </div>
  }
}