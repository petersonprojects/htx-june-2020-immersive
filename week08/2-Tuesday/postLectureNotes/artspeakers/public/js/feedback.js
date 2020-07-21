$(()=>{


    //make an api call the endpoint: /api 

    

    $.getJSON('/api', updateFeedback)


    
    $('.feedback-form').submit(e =>{

        e.preventDefault();
        console.log('submitted form')
        //post request to post data back to server 

        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback)
        
    })
    

    function updateFeedback(data){
        console.log(data);

        //take our data and display in the recent feedback
        //this is the same ast data.foreEach(item =>{})
        //key = index 
        //item = iterator vlaue
        //appending chunks of code
        var output = ''
        $.each(data,function(key, item) {
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>'; 
            output += '       </div>';
            output += '     </div>';
        });

        //find div container with .feedback-message class 
        // fill the container with the concatenated string created by looping 
        // through all of the data from fetch call
        $('.feedback-messages').html(output)

    }

})