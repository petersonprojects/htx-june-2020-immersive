<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======

import React, { useState, useEffect } from 'react'
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f

const Hook = () => {

    const [count, setCount] = useState(0);
<<<<<<< HEAD
    const [title, setTitle] = useState("Hook");
    const [arr, setArr] = useState([1,2,5,6,7]);
    const [add, setAdd] = useState(0);
    const [imgURL, setImgURL] = useState("");


    // use Effect has two arguments the second argument is the dependencies
    // this acts like component did mount [] no dependencies
    useEffect(() => {

        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
=======
    const [title, setTitle] = useState("Hooks");
    const [arr, setArr] = useState([1, 2, 5, 6, 7]);
    const [add, setAdd] = useState(0);
    const [imgURL, setImgURL] = useState("");
    
    //componentDidMount
    useEffect(()=>{
        //console.log(`I'm a useEffect Function`);

        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data =>{
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f

            let picURL = data.results[0].picture.large;

            setImgURL(picURL);
<<<<<<< HEAD
        })

    }, [])

    // acts as a componentDidUpdate
    // gets called after every render
    useEffect(()=>{
        console.log('Im a useEffect function')
    })




    return (
        <>
            <h1>{title}</h1>
            <br/>
            <img src={imgURL} alt="rando"/>
            <br/>

            {count}

            <br/>

            {arr.map(a => <li> {a * 3}</li>)}

            <br/>

            <button onClick={()=>setArr([...arr, 4])}>Push to Array</button>

            <br/>

            <button onClick={()=>setCount(count + 1)}>Click - Hooks</button>
            <button onClick={()=>setTitle(title + "s")}>Pluralize Title</button>

            <br/>
            <br/>
            <br/>
            <br/>

            Add 10 here: {add}
            <br/>
            <button onClick={()=>setAdd(add + 10)}>Add Ten</button>
=======

        })
    }, [arr])


    //componentDidUpdate
    useEffect(()=>{
        console.log("I'm  a useEFfect function");
    })
    
        
      


    // console.log("hello, i'm a hook");
    // let newArr = [...arr]
    // newArr.push(1)
    // this.setState({
    //     arr:newArr 
    // })

    // [1, 2, 4, ]
    // [1, 2, 4, 1]
    return (
        <>
            <h1>{title}</h1>

            <img src={imgURL} alt=""/>
            {count}

            <br />

            {arr.map(a => <li>{a * 3}</li>)}
            <br />

            <button onClick={()=>setArr([...arr, 4])}>push</button>

            <br /><br/>

            <button onClick={()=>setCount(count + 1)}>Click- Hooks</button>

            <br />

            {add}

            <button onClick={()=>setAdd(add + 10)}>Add</button>



>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f
        </>
    )
}

<<<<<<< HEAD
export default Hook;
=======
export default Hook
>>>>>>> d9c16afa8b80a619b13705f44d117f37030bdd2f
