import React, {Component} from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import Canvas from './canvas'
import Dnd from './dnd'
import Editor from './editor'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    
    return <div>

     <Switch>
       <Route path="/unit/canvas" component={Canvas}/>
       <Route path="/unit/editor" component={Editor}/>
       <Route path="/unit/dnd" component={Dnd}/>
       <Redirect to="/" />
     </Switch>
    </div>
  }
}