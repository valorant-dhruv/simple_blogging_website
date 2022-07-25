const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = new express();
const port = 8000;

app.use(cors());

//This is the get function which the frontend uses to fetch the data
app.get("/getdata", (req, res) => {
  //The readFile function is an asynchronous function which basically reads the file. The advantage of this async function is that
  //the normal flow of the program keeps on continuing while the function fetches the data
  //It has 3 paramters :the first parameter is the path of the file, the second paramter is the encoding which the is used and 3rd is
  //callback function
  var final;
  fs.readFile("./main.json", "utf8", (err, data) => {
    //When we read any data it is in string form the JSON.parse() function converts that data into a json object
    final = JSON.parse(data);
    console.log(final);
    res.json(final);
  });
});

//This is the post function which the frontend uses to post the data
app.post("/", (req, res) => {});

app.get("/", (req, res) => {
  console.log("A request has been made from the frontend");
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`The server is listening on the port ${port}`);
});
