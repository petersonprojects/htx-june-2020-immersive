import React, { Component } from 'react';
import Days from './Days';
import DropDownDays from './DrowpDownDays'

class SimpleList extends Component {
    render() {

        //days of the week
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        // let daysArr = days.map(day =>{

        //                 return <li>{day}</li>
        //             })

        //<li>Monday</li>
        //<li>Tuesday</li>
        //<li></li>
        //<li></li>
        //<li></li>

                    
        return (
            
            <>
               
                <Days daysArr={days}/>

                <DropDownDays days={days} />

            </>
        )
    }
}

export default SimpleList
