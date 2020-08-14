
import React, { Component } from 'react'

class Stepper extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        return (
            <>
                <button onClick={this.decrement}>-</button>
                <button>{this.state.count}</button>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}

export default Stepper
