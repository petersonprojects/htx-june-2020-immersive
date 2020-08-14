import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <>
      I'm a parent and my name is {props.name} <br />


      <Child name="Mario" />
    </>
  )
}

export default Parent
