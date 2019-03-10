import React from 'react';
import { Menu } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return <div>
            <h2>这是首页内容......</h2>
            <p>这里有两个部分...</p>
            <p></p>
            <Menu>
                <Menu.Item key="m1">
                    <Link to="/todolist">ToDoList</Link>
                </Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item key="m2">
                    <Link to="/tictactoe">TicTacToe</Link>
                </Menu.Item>
            </Menu>
        </div>
    }
}
