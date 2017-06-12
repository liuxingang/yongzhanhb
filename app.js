var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var router = express.Router();
var index = require('./router/index');
var api = require('./api/api');
var app = express();

app.use(bodyParser.json({ limit: '1mb' })); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
   extended: true
}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('static'));

app.use(index);
app.use(api);


var server  = app.listen(3000,function(){
   var host = server.address().address;
   var port = server.address().port;

   console.log("server is running at http://%s:%s",host,port)
});
