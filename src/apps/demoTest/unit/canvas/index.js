import React, {Component} from 'react'
import {Table, Badge, Menu, Dropdown, Icon, Input, Form, Button} from 'antd'
import Demo1 from './Demo1'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

@Form.create()
export default class Canvas extends Component {
  constructor() {
    super()
  }

  save = () => {
    const {getFieldsValue} = this.props.form
    console.log(getFieldsValue(), '--')
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return <div>
      <Form>
        <FormItem label="学科" {...formItemLayout} required>
          {
            getFieldDecorator('subject', {
              rules: [{max: 4, message: '444444444444'}]
            })(
              <Input/>
            )
          }
        </FormItem>
        <Demo1 />
        <div>
          <Button onClick={this.save}>提交</Button>
        </div>
      </Form>
    </div>
  }
}
