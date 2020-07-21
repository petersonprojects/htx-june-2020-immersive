
// start of jQuery dom ready
$(()=>{

    $('form').submit((e)=>{

        e.preventDefault();

        // success = .done function

        $.post('/', {
            username: $('#username').val(),
            password: $('#password').val()
        })
        .done((response)=>{
            // response is from router.post('/')

            // now we want to display information on the user's page
            $('#message').append(response)
        })

    })

})


// pure JS
// let form = document.querySelector('form');

// form.addEventListener('submit',(e)=>{
//     //makes it so it doesnt refresh on submit
//     e.preventDefault();

//     fetch('/', {
//         // change default behavior of the method fetch

//         method: 'POST',
//         header: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             username: document.getElementById('username').value,
//             password: document.getElementById('password').value
//         })
//     })
//     .then((data)=>{
//         console.log(`Response from post: ${data}`);
//     })

// });