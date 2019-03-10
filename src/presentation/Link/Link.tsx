/**
 * Presentation Component
 * 带有 callback 回调功能的链接
 * onClick() 当点击链接时会触发
 */

import * as React from 'react';

export interface listProps {
  active: boolean,
  children: string,
  onClick: () => void
}

//Footer中的超链接
//被点击时，active = true
export function Link ({ active, children, onClick }: listProps) {
  if (active) {
    return <span>{children}</span>
  }
  //<a> href：超链接
  //href ="" 默认打开的还是当前页面，会刷新一下重新打开
  //e.preventDefault() 取消事件的默认动作，此处为不会刷新

  //****** 所以此处不用href =""，就可以不用e.preventDefault()
  //****** 但这样链接直接是普通文字显示

  //onClick() 让鼠标能够点击
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}