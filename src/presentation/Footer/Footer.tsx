/**
 * Presentation Component
 * 根组件，渲染余下的所有内容
 * 一个允许用户改变可见 todo 过滤器的组件
 */
import './Footer.scss';
import * as React from 'react';
import { FilterLink } from '../../container/FilterLink/FilterLink'
import Button from 'antd/lib/button';
import { Card } from 'antd';

//选项栏
export const Footer = () => (
  <div>
    <p>
      <Button id = "b1">显示选项 :</Button>
      {'   '}
      <Button id = "b2"><FilterLink option="显示全部">
        全部
    </FilterLink></Button>
      {'   '}
      <Button id = "b2"><FilterLink option="显示未完成">
        未完成
    </FilterLink></Button>
      {'   '}
      <Button id = "b2"><FilterLink option="显示已完成">
        已完成
    </FilterLink></Button>
    </p>
  </div>
)
