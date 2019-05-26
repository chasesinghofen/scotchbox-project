var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res, next) {
res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(8000, "127.0.0.1");
console.log("App running at: http://localhost:8000");