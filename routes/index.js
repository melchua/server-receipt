var express = require('express');
var router = express.Router();
const database = require("./data/database");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Receipt' });
});

module.exports = router;
