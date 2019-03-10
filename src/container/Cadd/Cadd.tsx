import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Padd } from '../../presentation/Padd/Padd'
import { addTodo, Action } from '../constants'
//import { State } from '../appstate/index'

export function mapStateToProps () {
    return 
  }

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return { 
        addClick: (text: string) => {
            dispatch(addTodo(text))
        } 
    }
}

export const Cadd = connect(mapStateToProps,mapDispatchToProps)(Padd)