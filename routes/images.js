const database = require("./data/database");
var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router();
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

router.post('/', function(req, res, next) {
    console.log("posting my post")
    console.log(res.body)
  res.end()
});

module.exports = router;
