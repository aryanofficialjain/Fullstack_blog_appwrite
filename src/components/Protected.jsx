import React from 'react'

const Protected = ({children, authentication = true }) => {
  return (
    <>{children}</>
  )
}

export default Protected