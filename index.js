const express = require("express");
const mongoose = require("mongoose");
const getChromeTabs = require('get-chrome-tabs');
const app = express();

var http = require("http");
var url = require("url");

//const uri =
//   "mongodb+srv://shubhamawasthi0403:zybjax-texryz-gewjI8@cluster0.aklvjgm.mongodb.net/?retryWrites=true&w=majority";

// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error(error);
//   }
// }

var urlArr = [];

app.get("/", (req, res) => {
 res.send("App is Built and running like butter.");
 var queryString = url.parse(req.url, true);
 // Accessing href property of an URL.
 console.log("Complete href is :-" + queryString.href);
 getChromeTabs().then((array) => {
   console.log(array);
   array.map( (tab) => {
       if(urlArr.includes(tab.url)) {
           console.log("alert");
           //alert("You've already visited this website");
       } else {
           urlArr.push(tab.url);
       }
      
   });
   console.log(urlArr);
 })

});
app.listen(8000, () => {
 console.log("Server running on port 8000");
});
