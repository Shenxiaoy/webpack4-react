import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import Layout from './components/Layout'
import './styles.less'

class App extends React.Component {
  constructor() {
    super()

  }

  componentDidMount() {

  }

  render() {
    return <Layout>
      <Routes></Routes>
    </Layout>
  }
}

render(
  <App/>,
  document.getElementById('root')
)


