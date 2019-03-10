import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducer'
import App from './App/App'
import { Game } from './ttt/ttt'
import { Home } from './home/home'

let store = createStore(todoApp)

export class todolist extends React.Component {
  render() {
    return <div>
      <Provider store={store} >
        <App />
      </Provider >
    </div>
  }
}

export class tictactoe extends React.Component {
  render() {
    return <Game />
  }
}

export class home extends React.Component {
  render() {
    return <Home />
  }
}

