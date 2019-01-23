import React from 'react'
import {ContextMenu, MenuItem, ContextMenuTrigger} from 'react-contextmenu'

export default class Miracle extends React.Component {
  constructor() {
    super()
  }

  handleClick(e, data) {
    console.log(data.foo);
  }

  render() {
    return <div>
      <ContextMenuTrigger id="some_unique_identifier">
        <div className="well">右击菜单组件</div>
      </ContextMenuTrigger>

      <ContextMenu id="some_unique_identifier" style={{border: '1px solid #eee', padding: 5, margin: '15px 0 0 5px'}}>
        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
          <span href="">ContextMenu Item 1</span>
        </MenuItem>
        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>
      <hr/>

    </div>
  }
}