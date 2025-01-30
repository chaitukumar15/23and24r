//http or https
const http=require("http")
port=5000
const server=http.createServer((req,res)=>{
// if (req.method==="GET"){
//     res.write("get method called")
//     res.write("hello")
//     res.end("good bye")
//     res.write("hi")
// }
// if(req.method==="POST"){
//     res.write("post method")
//     res.end()
// }
// if(req.method==="PUT"){
//     res.write("put method ")
//     res.end()
// }
// if (req.method==="DELETE"){
//     res.write("delete method")
//     res.end()
// }

method=req.method////GET //POST //PUT // DELETE

switch(method){
    case "GET":
        res.write("GET method called")
        res.end()
        break;
    case "POST":
            res.write("POST method")
            res.end()
            break;
    case "PUT":
                res.write("PUT method")
                res.end()
                break;
    case "DELETE":
                    res.write("DELETE method")
                    res.end()
                    break;
    default:
        res.write("Invalid method")
        res.end()
}
})



server.listen(port,()=>{
    console.log("the server is active and running")
})