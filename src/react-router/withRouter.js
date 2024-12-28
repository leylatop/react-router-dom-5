import React from 'react'
import RouterContext from "./RouterContext"

function withRouter(OldComponent) {
  const NewComponent = (props) => {
    return (
      <RouterContext.Consumer>
      {
        (value) => {
          return <OldComponent {...props} {...value}/>
        }
      }
      </RouterContext.Consumer>
    )
  }
  return NewComponent
}

export default withRouter