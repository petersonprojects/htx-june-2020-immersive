import React, {useState} from 'react';

const Hook = () => {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Hook");
    const [arr, setArr] = useState([1,2,5,6,7]);
    const [add, setAdd] = useState(0);
    
    // const [state, setstate] = useState(initialState)

    // const multiplyArr = (arr) => {

    //     let mult = arr.map(a => {
    //         return  setArr(a * 3)
    //     })

    //     return mult;
    // }

    return (
        <>
            <h1>{title}</h1>
            {count}
            <br/>
            {arr.map(a => ` ${a * 3}`)}
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
