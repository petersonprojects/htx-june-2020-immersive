import React, { useState, useEffect } from 'react';

const Hooks = () => {

    const [data, setData] = useState([]);

    // with no dependencies acts like "componentDidMount"
    // you can have as many useEffects as you want

    useEffect(()=>{

        async function fetchData() {
            try{

                let response = await fetch('http://localhost:3001/api');
                let serverData = await response.json();

                setData(serverData);
            }
            catch{
                console.log('fetch failed');
            }
        }

        fetchData();

    }, [])

    return (
        <>
            {data.map(d => {
                return <h1 key={d.id}>{d.username}</h1>
            })}
        </>
    )
}

export default Hooks
