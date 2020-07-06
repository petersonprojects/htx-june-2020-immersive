
// let pendingPromise = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')

// console.log(pendingPromise);

// pendingPromise.then(result=>{
//     console.log(result);
// })

// console.log("hello world");

// for(let i = 0; i< 16000000; i++){
//     let p = i + 2;
// }

// console.log("finished with loop");



// let apiCall1 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')

// let apiCall2 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')



// let promise = Promise.all([apiCall1, apiCall2]);

// promise.then(resultsArr =>{

//     // let results = []
//     // results[0] = resultsArr[0].json();
//     // results[1] = resultsArr[1].json();

//     // return Promise.all(results);

//     return Promise.all(resultsArr.map(result =>{
//         return result.json()
//     }))
// })
// .then( dataArr =>{

//     console.log(dataArr[0], dataArr[1]);
// })


let fetchArr = []
let url = "";

for (let i = 0; i<45; i++){
    url = fetch("https://www.anapioficeandfire.com/api/characters?page=" + i + "&pageSize=50");
    fetchArr.push(url)
}
// console.log(fetchArr);

let promise = Promise.all(fetchArr);

promise.then(resultsArr =>{

    return Promise.all(resultsArr.map(result =>{

        return result.json()
    }))
})
.then((dataArr)=>{

    console.log(dataArr);
})


// $(function () {

//     let pageNum = 0;

//     function getNames(pageNum) {
        
//         $.get("https://www.anapioficeandfire.com/api/characters?page=" + pageNum + "&pageSize=50")
//             .done(function (response) {

//                 if (response.length > 0) {
                    
//                     pageNum++;
//                     console.log(pageNum);
//                     console.log(response);
//                     getNames(pageNum);
//                 }
                
//             })
//             .fail(function (error) {
//                 console.log(error);

//             })
        
//             console.log(`I'm done ${pageNum}`);
//     }

//     getNames(pageNum);
// })

