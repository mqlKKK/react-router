/**
 * reducer
 * 合并拆分的reducer
 */

import { combineReducers } from 'redux'
import todos from './reducer/todos'
import option from './reducer/visibilityFilter'

const todoApp = combineReducers({
  todos,
  option
})

export default todoApp