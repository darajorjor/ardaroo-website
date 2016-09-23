var Express = require("express");

var app = Express();

app.use('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function (error) {
    if(!error){
        console.log("express server connected successfully")
    }
});