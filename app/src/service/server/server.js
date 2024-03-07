const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server,{
    cors: {
        origin: "*", 
        methods: ["GET", "POST"],
        credentials: true
    },
})
io.on("connection",(socket)=>{
    console.log('a user connected ' + socket.id)
    socket.on("message",(data)=>{
        console.log(data);
        socket.emit("server",socket.id)
    })
})

module.exports = {app,server,io}