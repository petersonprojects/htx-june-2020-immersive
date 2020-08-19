import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    //new update has been made to props
    // this.props.data is the old value for the prop
    // nextProps is the new one
    // gets called before every render
    shouldComponentUpdate = (nextProps, nextState) => {
        // nextProps are the receiving props
        // nextProps.nameOfProperty


        console.log(`incoming prop ${nextProps.data} current prop: ${this.props.data}`)
        return !(nextProps.data == this.props.data)


    }

    // gets called after every render
    componentDidUpdate = (prevProps, prevState) => {
        
        // happens after the rendering happens
        // component did mount only happens ONCE
        // this happens every single time the render function is executed
        
    }
    

    // static getSnapshotBeforeUpdate(prevProps, prevState){

    // }
    
    render() {

        return (
            <>
                {this.props.data}

                <br/>
                <br/>

                {Date.now()}
            </>
        )
    }
}

export default Child
