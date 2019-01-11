
import React from 'react'
import Loadable from 'react-loadable'
import Loading from './components/RouteLoading'

const Message = Loadable({
  loader: () => import("./message"),
  loading: Loading
})

const Article = Loadable({
  loader: () => import("./article"),
  loading: Loading
})

export {
  Message,
  Article
}

