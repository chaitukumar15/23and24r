var http = require("http");

// http://localhost:port

var server =http.createServer((req,res)=>{

console.log("hello");

    res.end("hello world")

});

var port=3000;

server.listen(port,()=>{

    console.log("server is running on " + "http://localhost:"+port);
    
})