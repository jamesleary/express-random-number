var express = require("express");
var app = express();

var numName = require("./public/myModules/randomNumber.js");

app.get("/randomNumber", function(req, res){
  console.log('randomNumber is happening!');
  res.send(numName(1,10000000).toString());
});

var path = require("path");
app.get("/*", function(req, res){
  console.log('got a request!', req.params[0]);

  var file = req.params[0] || "/view/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});


app.listen(4000, function(){
  console.log('listening on the port 4000');
});
