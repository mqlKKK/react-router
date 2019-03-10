import React from 'react';
import ReactDOM from 'react-dom';
// 引入路由
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//引入组件
import { home, todolist, tictactoe } from "./presentation/index"
import "./router-demo.scss"

export default class RouterDemo extends React.Component {
    render() {
        return <Router>
            <div>
                <div id="div-home">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todolist">ToDoList</Link></li>
                        <li><Link to="/tictactoe">TicTacToe</Link></li>
                    </ul>
                </div>
                <hr />
                <div>
                    <Route exact path="/" component={home} />
                    <Route path="/todolist" component={todolist} />
                    <Route path="/tictactoe" component={tictactoe} />
                </div>
            </div>
        </Router>
    }
}

ReactDOM.render(
    <RouterDemo />,
    document.getElementById('root'),
  );