var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const database = require("./data/database");
const bodyParser = require('body-parser');



router.post('/submit', function (req, res, next) {
  console.log(req.body);
  database.insertReceipt(req.body)
    .then(res.end());

});

module.exports = router;