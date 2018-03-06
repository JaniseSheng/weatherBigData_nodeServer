const faker = require('faker');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

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


app.listen(80);
