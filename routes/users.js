var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


const database = require("./data/database");
const bodyParser = require('body-parser');

/* POST /user/login */

function createToken(email, password) {
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

router.post('/login', function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password)
  database.validateLogin(email, password)
    .then((result) => {

      if (result[0]) {
        const toke = createToken(email, password);
        console.log("Created new token: ", toke);
        res.json(toke);
      } else {
        console.log("no way buddy")
        res.send(401)
      }
    })
});

module.exports = router;