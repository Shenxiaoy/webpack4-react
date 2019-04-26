import React from 'react'
import {Login} from './Login'

export default class App extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return <div className="admin-login">
      <Login />
    </div>
  }
}