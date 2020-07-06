

$(function () {

    let pageNum = 0;

    function getNames(pageNum) {
        
        $.get("https://www.anapioficeandfire.com/api/characters?page=" + pageNum + "&pageSize=50")
            .done(function (response) {

                if (response.length > 0) {
                    
                    pageNum++;
                    console.log(pageNum);
                    console.log(response);
                    getNames(pageNum);
                }
                
            })
            .fail(function (error) {
                console.log(error);

            })
        
            console.log(`I'm done ${pageNum}`);
    }

    getNames(pageNum);
})

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


