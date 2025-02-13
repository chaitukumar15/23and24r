var http = require("http");

var fs = require("fs");

var url = require("url");
const { log } = require("util");

var server = http.createServer((req, res) => {
  var parsedurl = url.parse(req.url, true);

  // console.log(parsedurl.pathname);

  // console.log(parsedurl.query);

  if (parsedurl.pathname == "/sweets" && req.method == "POST") {
    fs.readFile("index.json", "utf-8", (err, data) => {
         
        if(err){
            res.write(JSON.stringify({
                err:err.message
            }))
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    });
  }else if(parsedurl.pathname == "/sweets" && req.method == "GET"){

    console.log(parsedurl.query.cat);

    if(parsedurl.query.cat){


        fs.readFile("index.json","utf-8",(err,data)=>{


            if(err){
                res.write(JSON.stringify({
                    err:err.message
                }))
                res.end()

            }else{
                var dataa= JSON.parse(data);
             
               if(parsedurl.query.cat=="m"){
                console.log(dataa.sweets)
                var milkbased=dataa.sweets.filter((val)=>{

                    return val.category=="Milk-based Sweets"

                })
                res.write(JSON.stringify(milkbased))
                res.end()
               }else if(parsedurl.query.cat=="f"){
                var friedbased=dataa.sweets.filter((val)=>{

                    return val.category=="Fried Sweets"

                })
                res.write(JSON.stringify(friedbased))
                res.end()               
               }else if(parsedurl.query.cat=="b"){
                var bakedsweets=dataa.sweets.filter((val)=>{

                    return val.category=="Baked Sweets"

                })
                res.write(JSON.stringify(bakedsweets))
                res.end()  

               }else{
                res.write(data)
                res.end() 
               }
            }
       })

    }else{
        res.end("send cat")
    }
  }
  else{

    res.write(JSON.stringify({
        msg:"hi resorce not found"
    }))
    res.end()

  }


});

server.listen(3007, () => {
  console.log("hi this server is running");
});
