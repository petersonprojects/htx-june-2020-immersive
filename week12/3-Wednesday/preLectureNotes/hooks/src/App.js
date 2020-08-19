import React, { Component } from 'react'
import Hook from './Hook'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       title: "Class Based Components",
       arr: [1, 2, 5, 6, 7],
       add: 0, 
       imgURL: ""
    }
  }

  componentDidMount = async () => {
    
    try {

      let response = await fetch('https://randomuser.me/api');

      let data = await response.json();

      console.log(data.results[0].picture.large);
      let picURL = data.results[0].picture.large;

      this.setState({
        imgURL: picURL
      })

    }
    catch{
      console.log(`no response found for fetch`);
    }
  }
  

  render() {

    //fetch()

    const {count, title, arr, add} = this.state
    return (
      <>
        <h1>{title}</h1>

        <img src={this.state.imgURL} alt=""/>
        {count}
        <br />

         {arr.map(a =>a * 3)}

        <br /><br />
        <button onClick={()=>{
          
          return this.setState({
            count: count + 1
          })
          
          }}>Click</button>

          <br /> 
          {add}
          <button onClick={()=>{
            
              return this.setState({
                add: add + 10
              })
            }}>Add</button>

        
        <Hook />
        
      </>
    )
  }
}

export default App
