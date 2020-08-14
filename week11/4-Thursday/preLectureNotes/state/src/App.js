import React, { Component } from 'react'

class App extends Component {

    //instance variables = state
    constructor() {

        super()
        // creating state
        
        this.state = {
            txt: 'this is a text value',
            count: 0
        }

    } //special

    handleClick = ()=> {
        console.log('Button was clicked');
        console.log(`${Date.now()}`);
        
        //this is bad. don't do it.
        //this mutates state directly
        // this.state.count = this.state.count + 1;

        this.setState({
            count: this.state.count + 1
        })

        console.log(this.state.count);
    }

    render() {
        return (
            <>
                <h1>{this.state.txt}</h1>
                <br />

                <button onClick={this.handleClick}>ClickMe  {this.state.count}</button>
            </>
        )
    }
}

export default App
