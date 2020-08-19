import React, { Component } from 'react';
import Loading from './Loading'
import Child from './Child'

// ComponentDidMount
// ShouldComponentUpdate
// ComponentDidUpdate
// CompnentWillUnMount
// getSnapshotBeforeUpdate

// componentDidCatch (?)

class App extends Component {

  constructor(props) {
    super(props)
    console.log('constructor called')
  
    this.state = {
      isLoaded: false,
      sendingChildData: 4
    }
  }

  
  componentDidMount = () => {

    console.log('componentDidMount');

    setTimeout(() => {

      this.setState({
        isLoaded: true
      })

    }, 2000)

  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('component did update')
  }
  

  handleClick = () => {
    this.setState({
      sendingChildData: this.state.sendingChildData + 1
    })
  }

  render() 
  {

    console.log("home page rendered");


    if(this.state.isLoaded)
    {
      return (
        <>
          Home page
          <br/><br/>
          <Child data={this.state.sendingChildData} />
          <br/> <br/>
          <button onClick={this.handleClick}>Click</button>
        </>
      )
    }
    else
    {
      return (
        <>
          <Loading/>
        </>
      )
    }

  }
}

export default App
