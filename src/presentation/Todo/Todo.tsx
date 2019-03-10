/**
 * Presentation Component
 *  一个 todo 项
 */

import * as React from 'react';
import {Button} from 'antd';

export interface todoProps {
  onClick: () => void,
  completed: boolean,
  text: string
}

export function Todo({ onClick, completed, text }: todoProps) {
  return (
    <div>
      <Button onClick={onClick}>{completed?"已完成":"未完成"} </Button> {text}
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
      </li>
      
    </div>
  );
}
