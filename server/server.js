const app = require('express')()
// create a server for our app
const server = require('http').createServer(app)
// this will help you to deal with cors error
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})

// this code is for connect the client with server
io.on('connection', socket =>{
    console.log('connection successfully')
    socket.on('message',payload => {
        console.log('Message received on server from client: ', payload)
        io.emit('message',payload)
    })
})

server.listen(7000, '0.0.0.0' ,()=>{
    console.log('I am listening at port: 7000)');
})