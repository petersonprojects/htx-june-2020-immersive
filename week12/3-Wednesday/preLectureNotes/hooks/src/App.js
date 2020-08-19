import React, { Component } from 'react'
import Hook from './Hook'

class App extends Component {

  constructor(){
    super()

    this.state ={
      count: 0,
      title: "Class Based Components",
      arr: [1,2,5,6,7]
    }
  }

  render() {

    const {count, title, arr} = this.state;
    return (
      <>
        <h1>{title}</h1>
        {count}

        <br/>
        {arr.map(a =>  ` ${a * 3}`)}
        <br/>
        <button onClick={()=>this.setState({count: count+1})}>Click</button>

        <br/>

        <Hook />

      </>
    )
  }

}

export default App

