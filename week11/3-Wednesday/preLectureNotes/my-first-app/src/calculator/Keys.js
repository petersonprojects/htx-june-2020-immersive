import React from 'react'
import './styles.css'

const componentName = (props) => {
    return (
        !props.zero ?
            <div className={props.bgc ? 'keypad specialKey' : 'keypad'}>
                {props.num}
            </div>
            : <div className="zero keypad">0</div>
    )
}

export default componentName
