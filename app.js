var express = require("express");

var app = express();

app.listen(process.env.PORT);

app.use(express.static("public"));