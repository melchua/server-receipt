var express = require('express');
var router = express.Router();
const database = require("./data/database");
const bodyParser = require('body-parser')

/* GET users listing. */
router.get('/', function(req, res, next) {
    database.returningReceipts()
    .then((result) => {
		res.send(result.rows);   
    });
});

module.exports = router;