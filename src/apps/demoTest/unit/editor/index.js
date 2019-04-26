import React from 'react'
import {ContextMenu, MenuItem, ContextMenuTrigger} from 'react-contextmenu'
import Editor from './Editor'
import Vvditor from './Vditor'

export default class Miracle extends React.Component {
  constructor() {
    super()
  }

  handleClick(e, data) {
    console.log(data.foo);
  }

  render() {
    return <div>
      <Vvditor />
      <hr/>
      <Editor />
    </div>
  }
}