import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import './styles.less'


class App extends React.Component {
  constructor() {
    super()

  }

  componentDidMount() {

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


