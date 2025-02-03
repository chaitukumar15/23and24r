

var http = require("http");

var url=require("url")

var server=http.createServer(async(req,res)=>{


    console.log(req.url);


    var parsedurl=url.parse(req.url,true)

    console.log(parsedurl.query);
    
    
var data = await fetch("https://fakestoreapi.com/products");

var dataa_json=await data.json();

if(parsedurl.query.order=="asc")
{

    dataa_json.sort((a,b)=>{
    

        return a.price-b.price
    
    })

    res.write(JSON.stringify(dataa_json));
    res.end()
    
}else if(parsedurl.query.order=="desc"){
    dataa_json.sort((a,b)=>{
    

        return b.price-a.price
    
    })

    dataa_json.filter(()=>{

    })
    res.write(JSON.stringify(dataa_json));
    res.end()
    
}else{

    res.write(JSON.stringify(dataa_json));
    res.end()


}
// console.log(dataa_json);

// res.write(JSON.stringify(parsedurl.query));

// res.end()


})

var port=3000;

server.listen(port,()=>{

    console.log("hi server has been started");
    
})