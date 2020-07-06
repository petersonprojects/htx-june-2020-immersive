

// fetch('restaurant')
// .then((result)=> result.json())
// .then((restaudata)=>{

//     fetch()
//     .then()
//     .then()
// })

// Promise.all([])


// let promise = new Promise((resolve, reject) => {

//     if (false) {
//         setTimeout(() => {


//             console.log("success");
//             resolve("successful completion")

//         }, 1000)
//     }
//     else {
//         reject("there was an error in the code")
//     }


// });

// promise.then((result) => {

//     console.log(result);
// })

// promise.catch((error)=>{

//     // console();

//     console.error(error)
// })


// console.log("JS");

</script>
    <!-- <script>
        let p1 = fetch('https://jsonplaceholder.typicode.com/photos');

        let p2 = fetch('https://jsonplaceholder.typicode.com/todos');


        Promise.all([p1, p2])
            .then((resp) => {

                let arr = [];
                
                arr.push(resp[0].json())
                arr.push(resp[1].json())
                
                return Promise.all(arr)

            })
            .then((data)=>{
                console.log(data)
            })
    </script> -->
    
let p1 = fetch('https://jsonplaceholder.typicode.com/photos');

let p2 = fetch('https://jsonplaceholder.typicode.com/todos');


Promise.all([p1, p2])
.then((resp)=>{

    resp[0].data;
    resp[1].data;

})





