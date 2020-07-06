

$(()=>{

    let fullCharList = [];
    let flag = false;

    for(let index = 1; index <=50; index++){

        $.get(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`)
        .done((charList)=>{
            // fullCharList.push(charList)
            fullCharList = [...fullCharList, ...charList]

        })
        .done(()=>{
            

            if(fullCharList.length >= 2130 && flag==false){
                flag = true;
                console.log(fullCharList);
                //dom manipulation

                
            }
        })
    }

    console.log("outside of for loop");

    
})