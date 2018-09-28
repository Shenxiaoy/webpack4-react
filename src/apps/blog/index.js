import React from 'react'
import { render } from 'react-dom'
import './styles.less'
import img1 from './img/1.png'

class App extends React.Component {

  render() {
    if(module.hot){
      module.hot.accept()

    }
    return <div className="blog-style">i am a blog
      <span style={{border: '2px solid #ccc'}}>c3ccc</span>
      <p className="img-box">
        <img src={img1} alt=""/>
      </p>
    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)



