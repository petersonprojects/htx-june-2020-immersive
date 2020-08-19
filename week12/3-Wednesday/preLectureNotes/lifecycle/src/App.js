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
      sendingChildData: 4,
      loadChild: true
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
      loadChild: !this.state.loadChild
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



          {/* <Child data={4} /> */}

          {
            // can NOT use an if statement in interpolating brackets, thats why ternaries are used
            this.state.loadChild ? <Child data={4} /> : null // null is unmounting the child from the dom
          }


          <br/> <br/>
          {/* <button onClick={this.handleClick}>Click</button> */}
          <button onClick={this.handleClick}>Load Child</button>
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
