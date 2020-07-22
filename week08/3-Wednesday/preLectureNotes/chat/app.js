const express = require('express');
const app = express();
const socket = require('socket.io');


// connect to public 
app.use(express.static('public'));

// connect to views
app.set('view engine', 'ejs');
app.set('views', 'views');

//routes 
app.use(require('./routes/chat'));

let server = app.listen(8000);

//pass the server into the socket server 

let io = socket(server);

io.on('connect', (socket) => {

    //this message will be broadcast out to each connected client
    socket.emit('chatMessage', { msg: "Hello from our backend" })

    socket.on('msgFromClient', (msgClient)=>{

        console.log(msgClient);

        //broadcasting out to all connected clients
        io.emit('msgFromServer', msgClient)
    })

})