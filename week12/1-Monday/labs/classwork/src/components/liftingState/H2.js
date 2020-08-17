import React from 'react'

// reset the value of count back to 0 in app.js
const H2 = (props) => {
    return (
        <>
            <button onClick={props.reset}>Reset</button>
        </>
    )
}

export default H2;
