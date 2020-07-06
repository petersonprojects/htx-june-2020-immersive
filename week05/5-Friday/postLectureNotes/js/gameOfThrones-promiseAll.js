

$(() => {


    let fetchArr = []
    let url = "";

    for(let page = 0; page<45; page++){

        url  = fetch("https://www.anapioficeandfire.com/api/characters?page=" + page + "&pageSize=50");

        fetchArr.push(url);
    }

    // console.log(fetchArr);


    let promise = Promise.all(fetchArr);

    promise.then((resultsArr)=>{

        return Promise.all(resultsArr.map(char =>{
            return char.json()
        }))

    })
    .then((dataArr)=>{

        console.log(dataArr);

        let charList = [];

        dataArr.forEach((char)=>{
            charList = [...charList, ...char]
        })

        console.log(charList);

        // dom manipulation right here
    })


    // let apiCall1 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')

    // let apiCall2 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')

    // let promise = Promise.all([apiCall1, apiCall2])

    // promise.then((resultsArr)=>{

    //     let results = [];

    //     results[0] = resultsArr[0].json();
    //     results[1] = resultsArr[1].json();

    //     return Promise.all(results)
    // })
    // .then((dataArr)=>{

    //     console.log(dataArr);

    //     let charArray = []

    //     dataArr.forEach((char)=>{

    //         charArray = [...charArray, ...char]
    //     })

    //     console.log(charArray);

    //     //manipulating the dom

    // })


    // console.log("outside of promise");

})