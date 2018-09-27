import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {

  render() {
    if(module.hot){
      module.hot.accept();

    }
    return <div>i am a blog okokbb</div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)



