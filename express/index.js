var express=require("express");

var cors=require("cors");
var app=express();
var port=3007;

app.use(cors())

app.use(express.json())

app.put("/",(req,res)=>{

    
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
        //   "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        //   "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemini-2.0-flash-lite-preview-02-05:free",
          "messages": [
            {"role": "user", "content": req.body.msg}
          ],
          "top_p": 1,
          "temperature": 0.75,
          "repetition_penalty": 1
        })
      }).then((val)=>{

       
        return val.json()
        

      }).then((val)=>{

        res.send(val["choices"][0]["message"]["content"])

      })
})



// app.get("/bodyy",(req,res)=>{
//     res.send({
//         msg:req.body
//     })


// })

app.put("/:id",(req,res)=>{

    

    res.send({
        msg:req.params
    })
})


app.listen(port,()=>{
    console.log("hi server started");
    
})