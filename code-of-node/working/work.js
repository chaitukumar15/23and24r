
var fs = require("fs");
const { nextTick } = require("process");




fs.readFile("index.txt","utf-8",(err,data)=>{


    console.log(data);
    
})



console.log(10);

setTimeout(()=>{

    console.log("hello");
    
},0)


nextTick(()=>{
    console.log("hello next tick");
    
})