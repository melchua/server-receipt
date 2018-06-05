var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


const database = require("./data/database");
const bodyParser = require('body-parser');

/* POST /user/login */

function createToken(email, password, admin) {
  var payload = {
    email,
    password,
    admin
  };
  var secretKey = "wakawaka";
  var newToken = jwt.sign(payload, secretKey, {
    algorithm: "HS256"
  });

  return newToken;
}

router.post('/login', function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log("woof", email, password)
  database.validateLogin(email, password)
    .then((result) => {
      if (result[0]) {
        const toke = createToken(email, password, result[0].admin);
        console.log(toke)
        res.json(toke);
      } else if(!result[0]) {
        res.sendStatus(401)
      }
    })
});

module.exports = router;