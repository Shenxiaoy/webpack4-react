import React from 'react'
import { render } from 'react-dom'
import './styles.less'

class App extends React.Component {

  render() {
    if(module.hot){
      module.hot.accept()

    }
    return <div className="blog-style">i am a blog okokbb1 <span style={{border: '1px solid #ccc'}}>44444</span></div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)



