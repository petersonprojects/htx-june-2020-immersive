
$(()=>{



    let pageNum = 0;
    let charArr = [];


    function getNames(pageNum){

        $.get("https://www.anapioficeandfire.com/api/characters?page=" + pageNum + "&pageSize=50")
        .done((response)=>{

            if( response.length > 0){

                pageNum +=1;

                charArr = [...charArr, ...response];

                
                getNames(pageNum);
            }
            else{
                //dom manipulation

                //console.log(charArr);

                let $listGroupContainer = $('.list-group');

                let liTags = charArr.map((char)=>{

                    return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} <b>houses</b> ${char.allegiances.length}</a>`
                })

                $listGroupContainer.html(liTags.join(''))
            }
        })
    


    }

    getNames(pageNum);

    console.log(`I'm done ${pageNum}`);


    let $div = $(".list-group");

    $div.click((e)=>{

        e.preventDefault();

        console.log(e.target.href);

        $.get(e.target.href)
        .done((detailedCharObj)=>{

            let $modalBody = $('.modal-body');

            let $modalTitle = $('#exampleModalLabel');

            $modalBody.html("");
            
            $modalTitle.html(detailedCharObj.name)

            //console.log(detailedCharObj.allegiances.length);

            if(detailedCharObj.allegiances.length > 0){

                detailedCharObj.allegiances.forEach((houseUrl)=>{

                    $.get(houseUrl)
                    .done((houseObj)=>{
                        console.log(houseObj.name);
                        $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                    })

                })
            }

            $('#exampleModal').modal('show');

        }) //end of the done statement

    })

})
    









