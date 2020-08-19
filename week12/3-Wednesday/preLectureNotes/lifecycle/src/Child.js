import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
        super(props)

        this.state = {
            increasing: false,
            num: 10
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
        // return !(nextProps.data == this.props.data)
        return true;

    }

    // gets called after every render
    componentDidUpdate = (prevProps, prevState) => {

        console.log('componentdidupdate')
        // happens after the rendering happens
        // component did mount only happens ONCE
        // this happens every single time the render function is executed
        // console.log(`previous props data: ${prevProps.data} current props: ${this.props.data}`)

        // state for number of characters had reached 12 (example)
        // new api call
        
        // let increasing = prevProps.data < this.state.num

        // if(increasing){
        //     this.setState({
        //         increasing: increasing,
        //         num: this.state.num - 1
        //     }, ()=>{
        //         console.log(`${this.state.increasing}, ${this.state.num}`)
        //     })
        // }

    }

    componentWillUnmount = () => {

        // used for clean up on component
        console.log(`component will unmount`);
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
