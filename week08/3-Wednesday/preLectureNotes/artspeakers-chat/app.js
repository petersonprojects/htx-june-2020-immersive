
const express = require('express');

const app = express();
const socketServer = require('socket.io');

// link to public folder 
app.use(express.static('public'));

// link to views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

//create routes
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));


let expressServer = app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})

//allowing socket server to listen to incoming requests from express
let io = socketServer(expressServer);

//connect is a keyword in socket.io

//when any client connects with socket connection, then this callback will be triggered
io.on('connect', (socket)=>{

    console.log('User is connected');

    //when client sends message to server: from 1 client
    socket.on('chat room', (msg)=>{


        // server will broadcast message out to all connect clients 
        console.log(msg);
        io.emit('chat room', msg);

    })

})