
var promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('foo')
    }, 300)
})


promise1.then((resultOfPromise) => {
    
    var promise2 = new Promise((resolve, reject)=>{
        
    })

})