const faker = require('faker');
var http = require('http');
var https = require('https');
var fs = require('fs');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

var options = {
  key: fs.readFileSync('./214531658760883.key'),
  cert: fs.readFileSync('./214531658760883.pem')
}
// var router = express.Router();
var axios = require('axios');


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.json())

app.post('/', function (req, res, next) {
  const param = req.body
  axios.post(param.url, {
    params: param.data
  }).then((response) => {
    var ret = response.data
    res.json(ret)
  }).catch((e) => {
    console.log(e);
  })
});

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
