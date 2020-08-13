import React, { Component } from 'react'

class App extends Component {


  render() {

    let people = ["Dan", "Michael", "Woody", "Jeremy", "Chris", "Cainan", "RJ", "Micah"]

    return (
      <>
        <ul>
          {
            people.map((person, index) =>{

              return <li key={index}>{person}</li>
            })
          }
        </ul>
      </>

    )
  }
}

export default App
