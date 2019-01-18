
import React from 'react'
import Loadable from 'react-loadable'
import Loading from './components/RouteLoading'

const Miracle = Loadable({
  loader: () => import("./miracle"),
  loading: Loading
})

export {
  Miracle,
}

