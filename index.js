var express=require('express')
var app=express()
var http=require('http').createServer(app)
var io=require('socket.io')(http)
var count=0;

io.on('connection', function(socket){
    console.log('a user connected');
    count++;
    io.emit('usercnt', count);
    socket.on('disconnect',function(){
        console.log('a user disconnected');
        count--;
        io.emit('usercnt', count);
    })
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

http.listen(4000,function(){
    console.log("listening on 4000");
})