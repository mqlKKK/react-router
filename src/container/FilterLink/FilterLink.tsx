/**
 * Container Component
 * 得到当前过滤器并渲染 Link
 */
import { connect } from 'react-redux'
import { setVisibilityFilter, Action } from '../constants'
import { Link } from '../../presentation/Link/Link'
import { Dispatch } from 'redux';
import { State } from '../constants/statetype'

export function mapStateToProps (state: State, ownProps: {option: string}) {
  return {
    active: ownProps.option === state.option
  }
}

export function mapDispatchToProps (dispatch: Dispatch<Action>, ownProps: {option: string}) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.option))
    }
  }
}

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)