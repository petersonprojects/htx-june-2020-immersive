import React, { Component } from 'react'

class DropDownDays extends Component {
    render() {

        let days = this.props.days.map(day => {
            return <option>{day}</option>

        })
        return (
            <>

                <select>
                    <option>Select a Day</option>
                    {days}
                </select>
            </>
        )
    }
}

export default DropDownDays
