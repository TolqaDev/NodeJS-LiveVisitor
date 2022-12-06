const { createServer } = require("http");
const express = require("express");
const socketIo = require("socket.io");
const path = require('path');

const app = express();
const server = createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });
const port = 3000;
let counter = 0;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    counter++;
    io.emit('userCounter', counter);
    socket.on('disconnect', () => {
        counter--;
        io.emit('userCounter', counter);
    });
});

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

server.listen(port, () => console.log(`Server listening on port: ${port}`));