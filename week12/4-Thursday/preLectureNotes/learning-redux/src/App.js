import React, { Component } from 'react'
//connect connects to the provider, which connects to redux
import {connect} from 'react-redux'
import increaseAction from './actions/increaseAction';
import decreaseAction from './actions/decreaseAction';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: "Counter Reducer"
    }
  }
  
  render() {
     return (
      <>
        <h1>{this.state.title}</h1>

        <h1>{this.props.counter}</h1>

        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>

      </>
    )
  }
}

//this function will be connected to Provider, which is connected to redux
// provider will pass in current global state from redux

//state is global state
let mapStateToProps = (state) => {
  
  //counter is a local prop
  return {
    counter: state.count
  }
}


let mapDispatchToProps = (dispatch) => {
  
  return {

    onIncreaseClick: ()=> dispatch(increaseAction()),
    onDecreaseClick: ()=> dispatch(decreaseAction())
  }
}


//connect is a hoc 
//take a component, return a new component that is connected to redux

export default connect(mapStateToProps, mapDispatchToProps)(App) /// App is now conntected to the provider
