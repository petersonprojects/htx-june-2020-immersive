
import React from 'react'

//reset the value of count back to zero in App.js 
const H2 = (props) => {
    return (
        <>
            <button onClick={props.reset}>reset</button>
        </>
    )
}

export default H2
