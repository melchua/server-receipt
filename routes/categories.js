var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


const database = require("./data/database");
const bodyParser = require('body-parser');

router.get('/', function (req, res, next) {
  // console.log("route is working!!!!");
   database.returnCategoriesList()
     .then((result) => {
       console.log('rows: ', result);
       res.send(result);
     }).catch((err) => console.error("Error:", err));
});

module.exports = router;