
// // Web Scraping
// // Given an array of urls:

// var urls = ['https://en.wikipedia.org/wiki/Futures_and_promises',
//     'https://en.wikipedia.org/wiki/Continuation-passing_style',
//     'https://en.wikipedia.org/wiki/JavaScript',
//     'https://en.wikipedia.org/wiki/Node.js',
//     'https://en.wikipedia.org/wiki/Google_Chrome'];

// //Use Promise.all and request-promise to retrieve the HTML files 
// // for all the web pages.

// // Promise.all(urls).then((responses)=>{
// //     for(let i = 0;i<urls.length;i++)
// //     {
// //         console.log(response[i].data);
// //     }
// // })

// var promise = new Promise((resolve, reject)=>{

//     if(true)
//     {
//         setTimeout(()=>{
//             console.log('inside promise');
//             resolve('promise success');
//         }, 1000)
//     }

//     else
//     {
//         reject('there was an error in code.');
//     }

// })

// promise.then((result)=>{
//     console.log(result);
// });

// promise.catch((error)=>{
//     console.error(error);
// })
