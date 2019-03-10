/**
 * reducer
 * 响应添加删除动作
 */

import { Action } from "../container/constants";
import * as constants from '../container/constants/demo'

function todos (state: Array<{ id: number, completed: boolean, text: string }> = [], action: Action) {
  switch (action.type) {
    case constants.addTodo:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case constants.toggleTodo:
      return state.map((todo: { id: number, completed: boolean, text: string }) =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos