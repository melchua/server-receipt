var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


const database = require("./data/database");
const bodyParser = require('body-parser');



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

/* POST /user/receipts/submit */

router.post('/receipts/submit', function (req, res, next) {
  console.log(req.body);
  database.insertReceipt(req.body)
    .then(res.end());

});


/* POST /user/login */

router.post('/login', function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  database.validateLogin(email, password)
    .then((result) => {
      if (result[0]) {
        console.log(result);
        const token = createToken(email, password, result[0].admin);
        console.log("Created new token: ", token);
        res.json({
          token,
          admin:result[0].admin,
          id: result[0].id,
          first_name: result[0].first_name,
          last_name:result[0].last_name
        }); // response.token
      } else {
        console.log("no way buddy");
        res.send(401);
      }
    });
});

/* GET /user/receipts */

router.get('/receipts', function (req, res, next) {
  console.log(req.headers.authorization.split(' ')[1])
  jwt.verify(req.headers.authorization.split(' ')[1], 'wakawaka', function (err, token) {
    if (err) {
      res.send(401);
    } else {
      database.validateLogin(token.email, token.password)
        .then((result) => {
          const userId = result[0].id;
          database.returningReceipts(userId)
            .then((result) => {
              res.send(result.rows);
            });
        });
    }
  });
});

// Testing for the above

// router.get('/:id/receipts', function (req, res, next) {
//      console.log("in the thing right now");
//      database.validateLogin("", "")
//        .then((result) => {
//          const userId = result[0].id;
//          console.log("user id:", userId);
//          database.returningReceipts(userId)
//            .then((result) => {
//              res.send(result.rows);
//            });
//        });
// });

module.exports = router;