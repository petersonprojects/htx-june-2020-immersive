
import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

class Stepper extends Component {
    constructor() {
        
        super()

        this.state = {
            value: 0
        }
    }

    increment = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrement = () => {
      
        this.setState({
            value: this.state.value - 1 
        })
    }
    
    
    render() {

        return (
            <>

            <Button variant="outline-primary" onClick={this.increment}> + </Button>

                <h1>{this.state.value}</h1>

            <Button variant="outline-danger" onClick={this.decrement}> - </Button>
            </>
        )
    }
}

export default Stepper
