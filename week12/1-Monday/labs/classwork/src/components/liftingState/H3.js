import React from 'react'

// increment the value of count inside of app.js
const H3 = (props) => {
    return (
        <>
            <button onClick={props.increment}>Increment</button>
        </>
    )
}

export default H3
