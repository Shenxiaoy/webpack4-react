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
    API.auth.getTimeHistory({id: 'scoped', name: 'eee', sku: [3,4,6]})
    API.auth.list('3edrfff45@##')
      var instance = axios.create({
          timeout: 1000,
          method: 'post',
          headers: {'content-type': 'application/json;charset=UTF-8'},
          url: '/user/333',
          baseURL: '/todu',
          data: '3333'
      })
      instance()
   
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


