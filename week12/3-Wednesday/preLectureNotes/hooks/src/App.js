import React, { Component } from 'react'
import Hook from './Hook'

class App extends Component {

<<<<<<< HEAD
  constructor(){
    super()

    this.state ={
      count: 0,
      title: "Class Based Components",
      arr: [1,2,5,6,7],
      imgURL: ''
=======
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       title: "Class Based Components",
       arr: [1, 2, 5, 6, 7],
       add: 0, 
       imgURL: ""
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f
    }
  }

  componentDidMount = async () => {
<<<<<<< HEAD

    try
    {
=======
    
    try {
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f

      let response = await fetch('https://randomuser.me/api');

      let data = await response.json();

<<<<<<< HEAD
      console.log(data.results)

=======
      console.log(data.results[0].picture.large);
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f
      let picURL = data.results[0].picture.large;

      this.setState({
        imgURL: picURL
      })

    }
<<<<<<< HEAD
    catch
    {
      console.log(`no response from api.`)
    }


  }

  render() {

    const {count, title, arr, imgURL} = this.state;
    return (
      <>
        <h1>{title}</h1>
        <br/>

        <img src={imgURL} alt="randopic"/>
        <br/>

        {count}

        <br/>

        {arr.map(a => ` ${a * 3}`)}

        <br/>

        <button onClick={()=>this.setState({count: count+1})}>Click</button>

        <br/>

        <Hook />

        <br/>


      </>
    )
  }

}

export default App

=======
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
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f
