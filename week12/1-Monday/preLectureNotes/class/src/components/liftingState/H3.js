import React from 'react'

// increment the value of count of inside of App.js
const H3 = (props) => {
  return (
    <>
    <button onClick={props.increment}>Increment Count</button>
    </>
  )
}

export default H3
