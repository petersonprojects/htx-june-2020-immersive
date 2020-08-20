import React, { Component } from 'react';
// connects to the provider, which connects to redux (its a higher order component)
import { connect } from 'react-redux';
import increaseAction from './actions/increaseAction';
import decreaseAction from './actions/decreaseAction';

// this function will be connected to the Provider, which is connected to Redux store
// the Provider will pass in current global state from Redux

let mapStateToProps = (state) => {
  
  return {
    counter: state.count
  }
}

let mapDispatchToProps = (dispatch) => {
  
  return {
    onIncreaseClick: ()=>dispatch(increaseAction()),
    onDecreaseClick: ()=>dispatch(decreaseAction())
  }

}

class App extends Component {

  constructor() {
    super()
  
    // this is local state
    this.state = {
      title: "Counter Reducer"
    }
  }
  
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <button onClick={this.props.onDecreaseClick}>-</button>
        <span> {this.props.counter} </span>
        <button onClick={this.props.onIncreaseClick}>+</button>

      </>
    )
  }
}


// connect is a higher order component
// take a component and return a new compnent that is connected to redux
export default connect(mapStateToProps, mapDispatchToProps)(App)

