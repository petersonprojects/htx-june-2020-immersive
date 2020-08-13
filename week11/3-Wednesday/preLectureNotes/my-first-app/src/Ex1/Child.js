import React from 'react'
import Grandchild from './Grandchild'

const Child = (props) => {
  return (
    <>
      I'm a child <br />
      I'm also a parent and my name is {props.name}

      <Grandchild name="Carlos" />

    </>
  )
}

export default Child
