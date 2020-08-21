import React, { Component } from 'react';
import {connect} from 'react-redux';
import increaseAction from './actions/IncreaseAction'
import decreaseAction from './actions/DecreaseAction'


class App extends Component {
  
  render() {
    return (
      <>
      
        <h1>{this.props.counter}</h1>

        <button onClick={this.props.onIncrease} > Increase</button>
        <button onClick={this.props.onDecrease} > Decrease</button>
      </>
    )
  }
}// end of class component 

/////////////

let mapStateToProps = state => {
  return {
    counter: state.count
  }
}
let mapDispatchToProps = (dispatch) =>{

  console.log(dispatch)
  return{
    onIncrease: () => dispatch(increaseAction()),
    onDecrease: () => dispatch(decreaseAction())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

