import React from 'react'
import RouterContext from './RouterContext'

export default function Prompt(props) {
  const value = React.useContext(RouterContext)
  React.useLayoutEffect(() => {
    if(props.when) {
      // 借助历史对象的block方法
      return value.history.block(props.message)
    }
  }, [props.message, value.history, props.when])
  return null
}
