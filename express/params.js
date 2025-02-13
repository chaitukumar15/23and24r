var express = require("express");

var fs = require("fs");

var app = express();
var port = 3002;

// sweets api -> pathanme - sweets method- get data -index.json

app.get("/sweets", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        status: 400,
        msg: err.message,
      });
    } else {
      res.send({
        status: 200,
        msg: "successfully read",
        data: data,
      });
    }
  });
});

app.get("/sweets/:id", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        status: 400,
        msg: err.message,
      });
    } else {
      var data1 = JSON.parse(data);
      console.log(data1);

      var filtereddata = data1["sweets"].filter((val) => {
        return val.id == req.params.id;
      });

      res.send({ msg: "succssfully sent", status: 200, data: filtereddata });
    }
  });
});

// root api -> /
app.get("/", (req, res) => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      res.send({
        msg: err.message,
        status: 400,
      });
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log("server is running");
});
