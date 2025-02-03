var http = require("http");
var fs = require("fs");
var server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.method == "GET") {
    fs.readFile("./res.json", "utf-8", (err, data) => {
      if (err) {
        res.write("error");
        res.end();
      } else {
        res.write(data);
        res.end();
      }

    });
  } else if(req.method == "POST") {
    
    fs.writeFile("res.json","hi thios",(err)=>{

    })
  }

});

var port = 3000;

server.listen(port, () => {
  console.log("hi this is sever");
});
