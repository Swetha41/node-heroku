var express = require('express');
var app = express();
var port =  process.env.PORT || 3000;

app.get("/", function(req,res){
    res.send("Welcome to Node js app n Heroku");

});
app.listen(port);
console.log(`app listening at port ${port}`)