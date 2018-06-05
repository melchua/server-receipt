var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


const database = require("./data/database");
const bodyParser = require('body-parser');

/* POST /user/login */

function createToken(email,password) {
  var payload = {
    email,
    password
  };
  var secretKey = "wakawaka";
  var newToken = jwt.sign(payload, secretKey, {
    algorithm: "HS256"
  });

  return newToken;
}

router.post('/login', function(req, res, next) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const toke = createToken(email,password);
  console.log("Created new token: ", toke);
  res.json(toke);

});

module.exports = router;