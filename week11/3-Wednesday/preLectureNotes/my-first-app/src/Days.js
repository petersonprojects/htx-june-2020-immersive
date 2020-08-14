import React, { Component } from 'react'

class Days extends Component {
    render() {

        let days = this.props.daysArr.map(day =>{
            return <li>{day}</li>
        })

        //<li>Monday</li>

        return (

            //loop through and contents of array
            <>
                <ul>
                    {days}
                </ul>
            </>
        )
    }
}

export default Days
