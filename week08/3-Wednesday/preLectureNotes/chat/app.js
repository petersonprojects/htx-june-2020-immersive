

const express = require('express');
const app = express();
const socket = require('socket.io');


//connect to public
app.use(express.static('public'))

//establish views
app.set('view engine', 'ejs');
// second parameter would be changed if views folder was named something else
app.set('views', 'views');

app.use(require('./routes/chat'))

let server = app.listen(8000,()=>{
    console.log('listening on port 8000');
})

let io = socket(server); // passes the server into the socket server

io.on('connect', (socket)=>{

    // this message will be broadcast out to each connected client
    socket.emit('chatMessage', {msg: "Hello from our backend"})

    socket.on('msgFromClient', (clientMessage)=>{

        // broadcasting to all connected clients
        io.emit('msgFromServer', clientMessage);

    });

});
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
