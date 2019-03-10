/**
 * Container Component
 * 根据当前显示的状态来对 todo 列表进行过滤，并渲染 TodoList
 */
import { connect } from 'react-redux'
import { toggleTodo, Action } from '../constants'
import { Dispatch } from 'redux';
import { TodoList } from '../../presentation/TodoList/TodoList'
import { State } from '../constants/statetype'

const getVisibleTodos = (todos: Array<{id: number,completed: boolean,text: string}>, option: string) => {
  switch (option) {
    case '显示已完成':
      return todos.filter((t: {id: number,completed: boolean,text: string}) => t.completed)
    case '显示未完成':
      return todos.filter((t: {id: number,completed: boolean,text: string}) => !t.completed)
    case '显示全部':
    default:
      return todos
  }
}

//负责输入逻辑，即state映射到UI组件的参数（props）
//将 store 中的数据作为 props 绑定到组件上
//当 state 变化，mapStateToProps 都会被调用，计算出一个新的 stateProps
//更新给connect()产生的容器组件
//----------Redux store 中的数据连接到组件的基本方式
export function mapStateToProps (state: State) {
  return {
    todos: getVisibleTodos(state.todos, state.option)
  }
}

//负责输出逻辑，即将用户对 UI组件的操作映射成Action
//将 action 作为props 绑定到 connect()产生的容器组件 上
export function mapDispatchToProps (dispatch: Dispatch<Action>) {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

//（1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
//（2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
