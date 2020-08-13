import React, { Component } from 'react'

class ChildList extends Component {

    render() {

        let namesArr = this.props.num.map(name =>{

            return <h2>Digital Crafts Student {name}</h2>
        })

        console.log(namesArr);

        return (
            <>
                Child List <br />
               
                {namesArr}
            </>
        )
    }
}

export default ChildList
