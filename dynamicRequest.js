var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.get("/", function (req, res, next) {
    res.send("Hello World");
});

app.post("/", function (req, res, next) {
    console.log(req.body);
    res.send("I am post method")
});

app.listen(3000, function () {
    console.log("Started on port:3000");
});