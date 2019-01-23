import React, {Component} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

export default class Editor extends Component {
  constructor() {
    super()
    this.state = {
      text: '33',
      editorState: '33'

    }
  }

  handleQuillChange = (value) => {
    this.setState({text: value})
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    const result = await saveEditorContent(htmlContent)
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {

    return <div>


      <p>-------------------braft-editor---------------</p>

      <div style={{width: 750, maxHeight: 750, border: '1px solid #ccc'}}>
        <div className="my-component">
          <BraftEditor
            value={this.state.editorState}
            onChange={this.handleEditorChange}
            onSave={this.submitContent}
          />
        </div>
      </div>
      <br/>
      <br/>
      <div style={{width: 640, height: 400, overflow: 'auto', }}>
        <p>-------------------react-quill---------------</p>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleQuillChange}
          theme="snow"
        />
      </div>
      <br/>
    </div>
  }
}
