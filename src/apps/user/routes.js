import {HashRouter, Route} from 'react-router-dom'
import React from 'react'
import Loadable from 'react-loadable'
import {Message, Article} from './dynamicImport'

export default class Routes extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div>
      <HashRouter>
        <div>
          <Route exact path="/" component={content} />
          <Route path="/messageUpdate" component={Message} />
          <Route path="/article" component={Article} />
        </div>
      </HashRouter>
    </div>
  }
}

const content = () => <div>我想做什么呢</div>