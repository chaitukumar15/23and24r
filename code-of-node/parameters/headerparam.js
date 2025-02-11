
var http=require("http");
var url = require("url");

var cat=require("./cat.js")


var server=http.createServer(async(req,res)=>{

    var data = await fetch("https://fakestoreapi.com/products")

    var data_json= await data.json()

    var urldata=req.url

    var parsedurl=url.parse(urldata,true)

    var cate=parsedurl.query.cat;

    if(cate=="m"){
        // var mens=data_json.filter((val)=>{

        //   return  val.category=="men's clothing"

        // })

        var data_men=cat("men's clothing",data_json)

        res.write(JSON.stringify(data_men))
      res.end()

    }else if(cate=="w"){


        var data_woem=cat("women's clothing",data_json)
        // var womens=data_json.filter((val)=>{

        //   return  val.category=="women's clothing"

        // })

        res.write(JSON.stringify(data_woem))
      res.end()
    }else{
        res.write(JSON.stringify(data_json))
        res.end() 
    }





// res.end(JSON.stringify())


})



server.listen(3001,()=>{


    console.log("hi server is running");
    
})