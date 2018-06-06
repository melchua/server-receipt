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
  console.log(email, password);
  database.validateLogin(email, password)
    .then((result) => {
      if (result[0]) {
        const token = createToken(email, password, result[0].admin);
        console.log("Created new token: ", token);
        res.json({token}); // response.token
      } else {
        console.log("no way buddy");
        res.send(401);
      }
    });
});

/* GET users receipts listing. */
router.get('/receipts', function (req, res, next) {
  console.log("is this working??");
  console.log("headers: ", req.headers);
 jwt.verify(req.headers.authorization.split(' ')[1], 'wakawaka', function (err, token) {
   if (err) {
     res.send(401);
   } else {
      console.log("outside:", token.email);
     database.validateLogin(token.email, token.password)
       .then((result) => {
         console.log("email: ", token.email);
         console.log("password", token.password);
         const userId = result[0].id;
         database.returningReceipts(userId)
           .then((result) => {
             console.log('rows: ', result);
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