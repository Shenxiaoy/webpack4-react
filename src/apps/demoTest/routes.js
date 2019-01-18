import {HashRouter, Route} from 'react-router-dom'
import React from 'react'
import App from './components/Layout'
import {Miracle} from './dynamicImport'

export default class Routes extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div>
      <HashRouter>
        <div>
          <Route exact path="/" component={content} />
          <Route path="/miracle" component={Miracle} />
        </div>
      </HashRouter>
    </div>
  }
}

const content = () => <div>我想做什么呢</div>