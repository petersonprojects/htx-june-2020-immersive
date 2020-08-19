
import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isIncreasing: false,
            num: 10
        }
    }

    //new update has been made to props 
    //this.props.data old value
    // this gets called before every render
    shouldComponentUpdate = (nextProps, nextState) => {

        //nextProps are the receiving props
        //nextProps.nameOfProperty

        //5 4
        console.log(`incoming prop ${nextProps.data} ${this.props.data}`);


        // return !(nextProps.data == this.props.data)

        return true


    }

    //gets called after every render
    componentDidUpdate = (prevProps, prevState) => {

        console.log("Component did update");

        //prevProps is data before button was changed and compondent was rendered 4
        //this.props.data is current value - 5
        console.log(`${prevProps.data} ${this.props.data}`);


        //state # char 12 
        // new api 

        // 4 < 10
        // 5 < 9
        // 6 < 8
        // 7 < 7
        let increasing = prevProps.data < this.state.num

        //7
        // if (increasing) {
        //     this.setState({
        //         increasing: increasing,
        //         num: this.state.num - 1
        //     }, () =>{
        //         console.log(`${this.state.increasing}, ${this.state.num}`);
        //     })
        // }
    }

    componentWillUnmount = () => {
        //clean up on component
        
        console.log(`component will unmount`);
    }

    
    render() {
        return (
            <>
                {this.props.data}

                <br />

                {Date.now()}
            </>
        )
    }
}

export default Child
