

var express = require('express');
var app = express();

app.use(express.static(__dirname));
console.log('server start on port 8111');
console.log("open: " + "http://localhost:8111/demo");
app.listen(8111);
