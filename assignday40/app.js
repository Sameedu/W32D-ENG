var express = require('express');
var indexRouter = require('./routes/index');


var app = express();
app.use(express.json());


app.use('/', indexRouter)




app.listen(3001);