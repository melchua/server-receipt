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
        res.json({token, admin: result[0].admin}); // response.token
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
        const isAdmin = result[0].admin
         const userId = result[0].id;
         database.returnAllReceipts()
         .then((result) => {
          let receipts = result.rows
          res.send({receipts: receipts, isAdmin: isAdmin});
        });
       });
    }
  });
});

router.post('/receipt/status', function (req, res, next) {
  console.log("receipt id", req.body.receipt_id, "status id", req.body.status_id)
  database.updateReceiptStatus(req.body.receipt_id, req.body.status_id)
    .then(res.end())
    .catch((error) => {
      console.log(error)
    })
});





// Testing for the above

// router.get('/testme', function (req, res, next) {
//      console.log("in the thing right now");
//      // database.validateLogin("", "")
//      //   .then((result) => {
//      //     const userId = result[0].id;
//      //     console.log("user id:", userId);
//          database.returnAllReceipts()
//            .then((result) => {
//              res.send(result.rows);
//            });
//        // });
// });



module.exports = router;