import React, {useState} from 'react'
import {Button} from 'antd'

export default function tag() {
  const [count, setCount] = useState(2)

  return <div>
    计数：{count}
    <p><Button type="primary" onClick={()=>{setCount(count + 1)}}>递增</Button></p>
  </div>
}