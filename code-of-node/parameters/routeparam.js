var obj = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

var http = require("http");
const { parse } = require("path");
const { json } = require("stream/consumers");

var url = require("url");

var server = http.createServer((req, res) => {
  var parsedurl = url.parse(req.url, true);
// ""
var id ;

//   if (parsedurl.pathname == "/home") {
//     res.write(JSON.stringify(obj));
//     res.end();
//   }else{

//     var splitedval= parsedurl.pathname.split("/");

//    console.log(splitedval[splitedval.length-1]);

//    var route_val=splitedval[splitedval.length-1];

//   var returedval= obj.filter((val)=>{

//     return val.id==route_val

//    })
   
//    console.log(returedval);
   

    // res.write(JSON.stringify(returedval));
    // res.end();
    // res.write(parsedurl.pathname);
    // res.end();
//   }


  // console.log(parsedurl.pathname);

  if (parsedurl.pathname == "/home" && req.method=="GET")  {
    res.write(JSON.stringify(obj));
    res.end();
  }else if(parsedurl.pathname.startsWith("/home/")){

   var splitedval= parsedurl.pathname.split("/");

   console.log(splitedval[splitedval.length-1]);

   var route_val=splitedval[splitedval.length-1];

  var returedval= obj.filter((val)=>{

    return val.id==route_val

   })
   
   console.log(returedval);
   

    res.write(JSON.stringify(returedval));
    res.end();

  } 
  else {
    res.write("hi this is root");
    res.end();
  }
});

server.listen(3000,"192.168.0.20",() => {
  console.log("hi strted the server");
});
