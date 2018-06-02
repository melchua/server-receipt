var express = require('express');
var router = express.Router();
const database = require("./data/database");

/* GET users listing. */
router.get('/', function(req, res, next) {
    database.returningReceipts()
    .then((result) => {
      console.log('we got something: ', result.rows)
		res.send(result.rows);   
    });
});

module.exports = router;