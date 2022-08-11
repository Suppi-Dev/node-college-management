const http = require('http');
var mongo = require("mongodb");


http.createServer(function (req, res) {
    res.end("Hello World")
}).listen(4000, () => {
    console.log("node server runnin on 4000");
})






