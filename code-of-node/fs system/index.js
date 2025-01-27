var fs = require("fs");





// reading file 
// var y=fs.readFileSync("./index.txt","utf-8");

// fs.readFile("./index.txt","utf-8",(err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log(y);


// console.log("hi i am last ");




// creating files


// var obj={a:"chaitanya",age:200}

// fs.writeFile("./index.txt",JSON.stringify(obj),"utf-8",(err)=>{
//     console.log(err)
// });

// if(err){
//     console.log(err);
    
// }else{
//     console.log("file has been created");
    
// }


// })

// fs.writeFile("./cric", "Hi this is cricket.","utf-8", (err)=>{
//     console.log(err);
// })



// append file 

// fs.appendFile("./chaitanya123.txt","\nhi this is append",(err)=>{

//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file has been appended");
        
//     }

// })


// deleting the file 

fs.unlink("./chaitanya.txt",(err)=>{

    if(err){
        console.log(err);
        
    }else{
        console.log("deleted the files");
        
    }

})
