
import React, { useState, useEffect } from 'react'

const Hook = () => {

    const [count, setCount] = useState(0);
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

            let picURL = data.results[0].picture.large;

            setImgURL(picURL);

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



        </>
    )
}

export default Hook
