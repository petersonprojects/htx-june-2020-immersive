

$(()=>{


    //look for form 
    //attach event listner
    $('form').submit((e)=>{

        //prevent default window functionality: action and post and submit

        e.preventDefault();
         //make api call: $.get  $.post
        //no need for json.stringify
        //success = done functions
         $.post('/', {
             username: $('#username').val(),
             password: $('#password').val()
         })
         .done((response)=>{
            //response is from router.post('/')

            //want to display information on user page

            $('#message').html(response)
         })
        

    })

     


   


})


// console.log('hello world')
// let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     fetch('/', {
//         method: 'POST',
//         header: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             username: document.getElementById('username').value,
//             body: document.getElementById('password').value
//         })

//     })
//     .then((data) => {

//         console.log(`response from post ${data}`);
//     })
// })

