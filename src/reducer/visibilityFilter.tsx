/**
 * reducer
 * 响应过滤动作
 */

import * as constants from '../container/constants/demo'
import { Action } from '../container/constants'

function option (state = 'SHOW_ALL', action: Action) {
  switch (action.type) {
    case constants.setVisibilityFilter:
      return action.option
    default:
      return state
  }
}

export default option