var http = require("http");

var fs=require("fs");

var server = http.createServer((req, res) => {
  var a = "";
//   asynnc 
  req.on("data", (chunk) => {
    a += chunk;
    console.log(a);
  });

  req.on("end", () => {
    
    // res.end(a)
    fs.writeFile("index.json",a,"utf-8",(err)=>{

        if(err){
            res.end(JSON.stringify(err))
        }else{
            res.end(JSON.stringify({
                data:"hi successfully stored"
            }))
        }

    })
  });
});

server.listen(3000, () => {
  console.log("server has been started");
});
