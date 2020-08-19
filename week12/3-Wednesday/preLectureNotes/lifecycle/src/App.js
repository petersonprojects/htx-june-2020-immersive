import React, { Component } from 'react'
import Loading from './Loading'
import Child from './Child'

//ComponentDidMount 
//ShouldComponentUpdate 
//ComponentDidUpdate 
//ComponentWillUnmount 
//getSnapshotBeforeUpdate

// componentDidCatch

class App extends Component {

  constructor(props) {
    super(props)
    console.log("constructor called");

    this.state = {
      isLoaded: false,
      loadChild: true
    }
  }

  //deprecated
  // componentWillMount() {
  //   console.log("component will mount");
  // }

  componentDidMount = () => {

    console.log('component did mount');

    //api 

    setTimeout(() => {

      this.setState(
        {
          isLoaded: true,
          sendingChildData: 4
          
        }
      )
    })

  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('component did update');
  }
  

  handleClick = () => {
    
    // this.setState({
    //   sendingChildData: this.state.sendingChildData + 1
    // }, ()=>{
    //   console.log(this.state.sendingChildData);
    // })

    this.setState({
      loadChild: !this.state.loadChild
    })
  }
  

  render() {
    console.log("home page rendered");

    if (!this.state.isLoaded) {
      return <Loading />
    }
    else {
      return (
        <>
          Home page
          <br/> <br />

          {/* <Child data={4} /> */}

          {this.state.loadChild
            ? <Child data={4} />
            : null
          }

          
          <br /><br />

          <button onClick={this.handleClick}>Click</button>


          {/* <button onClick={this.handleClick}>Click</button> */}
        </>
      )
    }
  }
}

export default App
