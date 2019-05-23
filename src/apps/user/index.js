import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import API from 'apis'
import axios from 'axios'
import './styles.less'


class App extends React.Component {
  constructor() {
    super()

  }

  componentDidMount() {
    API.auth.getTimeHistory({id: 33, name: 'eee', sku: [3,4,6]})
   
  }

  render() {
    return <div>
      <Routes></Routes>
    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)


