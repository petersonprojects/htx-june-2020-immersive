import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      data: []
    }

  }

  componentDidMount = async () => {

    let response = await fetch('/api');
    let serverData = await response.json();

    this.setState({
      data: serverData
    }, ()=> {
      console.log(this.state.data)
    })
  }
  
  render() {
    return (
      <>
        {this.state.data.map(user => {
          return <div key={user.id}>{user.username}</div>
        })}
      </>
    )
  }
}

export default App

