/**
 * Container Component
 *  含有“Add”按钮的输入框
 * 很难分清到底该使用容器组件还是展示组件
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo, Action } from '../constants'

export interface AddProps {
  dispatch: Dispatch<Action>
}

class AddTodo extends React.Component<AddProps, object> {
  //"submit": 点击后会提交表单到服务器
  //form: 表格
  //onSubmit 事件会在表单中的确认按钮被点击时发生。当该事件触发的函数中返回false时，表单就不会被提交
  //trim()： string函数，去除空格
  //dispatch(action)： 触发action时更新state
  public render() {
    let input: any
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            添加
        </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)