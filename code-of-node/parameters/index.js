var http = require("http");

var url = require("url");

// var server=http.createServer(async(req,res)=>{

//     console.log(req.url);

//     var parsedurl=url.parse(req.url,true)

//     console.log(parsedurl.query);

// var data = await fetch("https://fakestoreapi.com/products");

// var dataa_json=await data.json();

// if(parsedurl.query.order=="asc")
// {

//     dataa_json.sort((a,b)=>{

//         return a.price-b.price

//     })

//     res.write(JSON.stringify(dataa_json));
//     res.end()

// }else if(parsedurl.query.order=="desc"){
//     dataa_json.sort((a,b)=>{

//         return b.price-a.price

//     })

//     dataa_json.filter(()=>{

//     })
//     res.write(JSON.stringify(dataa_json));
//     res.end()

// }else{

//     res.write(JSON.stringify(dataa_json));
//     res.end()

// }
// // console.log(dataa_json);

// // res.write(JSON.stringify(parsedurl.query));

// // res.end()

// })

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

const server = http.createServer((req, res) => {
  // Log the request URL
  console.log(req.url);

  // Parse the URL to extract path and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle GET request for /home
  if (pathname === "/home") {
    // Respond with the full list of items
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(obj));
    res.end();
  }
  // Handle GET request for /home/:id (where :id is a route parameter)
  else if (pathname.startsWith("/home/")) {
    // Extract the route parameter from the URL
    const route = pathname.split("/");
    const id = route[route.length - 1]; // id will be the last part of the path

    console.log(id);

    // Filter the items based on the route parameter (id)
    const filtered = obj.filter((item) => {
      return item.id == id;
    });

    console.log(filtered);

    if (filtered.length > 0) {
      // If item found, return the filtered result
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(filtered[0])); // Return the first match
    } else {
      // If no item found with the provided id, send a 404 response
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Item not found" }));
    }
    res.end();
  }
  // If the route doesn't match any known pattern, provide a 404 message
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

var port = 3000;

server.listen(port, () => {
  console.log("hi server has been started");
});
