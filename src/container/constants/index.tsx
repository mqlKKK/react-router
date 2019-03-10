import * as constants from './demo'

let nextTodoId: number = 0

export interface AddTodo {
  type: constants.addTodo
  id: number
  text: string
}

export interface SetVisibilityFilter {
  type: constants.setVisibilityFilter
  option: string
}

export interface ToggleTodo {
  type: constants.toggleTodo
  id: number
}

export type Action = AddTodo | SetVisibilityFilter | ToggleTodo;

export function addTodo (text: string): AddTodo {
  return {
    type: constants.addTodo,
    id: nextTodoId++,
    text
  }
}
export function setVisibilityFilter (option: string): SetVisibilityFilter {
  return {
    type: constants.setVisibilityFilter,
    option
  }
}
export function toggleTodo (id: number): ToggleTodo {
  return {
    type: constants.toggleTodo,
    id
  }
}


