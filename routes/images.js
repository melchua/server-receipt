const database = require("./data/database");
var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var app = express()

router.post('/', function(req, res) {
    console.log(req.body)
  res.end()
});

module.exports = router;
