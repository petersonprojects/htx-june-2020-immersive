import React, { Component } from 'react'
import Hook from './Hook'

class App extends Component {

  constructor(){
    super()

    this.state ={
      count: 0,
      title: "Class Based Components",
      arr: [1,2,5,6,7],
      imgURL: ''
    }
  }

  componentDidMount = async () => {

    try{

      let response = await fetch('https://randomuser.me/api');

      let data = await response.json();

      console.log(data.results)

      let picURL = data.results[0].picture.large;

      this.setState({
        imgURL: picURL
      })

    }
    catch{
      console.log(`no response from api.`)
    }


  }

  render() {

    const {count, title, arr, imgURL} = this.state;
    return (
      <>
        <h1>{title}</h1>

        {count}

        <br/>

        {arr.map(a => ` ${a * 3}`)}

        <br/>
        
        <button onClick={()=>this.setState({count: count+1})}>Click</button>

        <br/>

        <Hook />

        <br/>

        <img src={imgURL} alt="randopic"/>

      </>
    )
  }

}

export default App

