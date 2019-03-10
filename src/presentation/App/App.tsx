/**
 * Presentation Component
 * 根组件，渲染余下的所有内容
 */

import * as React from 'react'
import { Cadd } from '../../container/Cadd/Cadd'
import { VisibleTodoList } from '../../container/VisibleTodoList/VisibleTodoList'
import { Footer } from '../Footer/Footer'
import { Button } from 'antd'
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Cadd />
    <VisibleTodoList />
    <Footer />
    <Button><Link to="/">返回</Link></Button>
  </div>
)

export default App