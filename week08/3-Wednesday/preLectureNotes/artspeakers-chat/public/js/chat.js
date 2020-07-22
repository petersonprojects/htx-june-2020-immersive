
const socket = io();
console.log('hello');

var chatUserName = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', () => {


    let chatForm = document.forms.chatForm;

    if (chatForm) {

        //add event listener to form

        chatForm.addEventListener('submit', (e) => {

            e.preventDefault();

            //broadcast message back to server 

            //grab username and message
            socket.emit('chat room', {
                username: chatUserName.value,
                message: chatMessage.value
            })

        }) //end of form event listener


        //listen to incoming messages from server 
        socket.on('chat room', (msgFromServer) => {
            // {username:value, message:value}
            console.log(`msg frm serve ${msgFromServer}`);
            showMessage(msgFromServer);
        })


        //clear field fields out
    }
})  //end of socketio


function showMessage(data) {
    console.log(`data ${data}`);
    var chatDisplay = document.querySelector('.chat-display');
    console.log(chatUserName);
    var newMessage = document.createElement('p');

    if (chatUserName.value == data.username) {
      newMessage.className = 'bg-success chat-text';
    } else {
      newMessage.className = 'bg-info text-warning chat-text';
    }

    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}