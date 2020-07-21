//jQuery DOM ready

$(()=>{

    //make an api call to the endpoint: /api

    $.getJSON('/api')
    .done((data)=>{
        console.log(data);

        // in the $.each function we
        // take our data and display in the recent feedback
        // this is same as data.forEach(item =>{})
        // key = index
        // item = iterator value
        // output is appending chunks of code

        var output = '';

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

        // find div container with .feedback-message class
        // fill the container with the concatenated string by looping
        // through all of the data from fetch call

        $('.feedback-messages').html(output);
    })

    //post request to post data back to server

    $('.feedback-form').submit((e)=>{

        e.preventDefault();

        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        })
        .done((data)=>{
            console.log(data);
        })
        

    });


})