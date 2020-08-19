import React, {useState, useEffect} from 'react';

const Hook = () => {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Hook");
    const [arr, setArr] = useState([1,2,5,6,7]);
    const [add, setAdd] = useState(0);
    const [imgURL, setImgURL] = useState("");


    useEffect(() => {
      return () => {
        effect
      };
    }, [input])

    // fetch('https://randomuser.me/api')
    // .then(response => response.json())
    // .then(data => {

    //     let picURL = data.results[0].picture.large;

    //     setImgURL(picURL);
    // })




    return (
        <>
            <h1>{title}</h1>
            <br/>
            {/* <img src={imgURL} alt="rando"/> */}
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
        </>
    )
}

export default Hook;
