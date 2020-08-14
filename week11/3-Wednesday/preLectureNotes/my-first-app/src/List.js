import React, { Component } from 'react'
import ChildList from './ChildList';

class List extends Component {


    render() {

        //
        let myArr = ["Michael", "Micah", "Woody"]
        
        return (
            <>
                I am a list

                <ChildList num={myArr} />
            </>
        )
    }
}

export default List
