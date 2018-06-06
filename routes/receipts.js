var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const database = require("./data/database");
const bodyParser = require('body-parser');

// /* GET users receipts listing. */
// router.get('/:id/receipts', function (req, res, next) {
//  jwt.verify(req.headers.authorization.split(' ')[1], 'wakawaka', function (err, token) {
//    if (err) {
//      res.send(401);
//    } else {
//      database.validateLogin(token.email, token.password)
//        .then((result) => {
//          const userId = result[0].id
//          database.returningReceipts(userId)
//            .then((result) => {
//              res.send(result.rows);
//            })
//        });
//    }
//   })
// });

// /* GET users testing receipts listing. */
// router.get('/:id/receipts', function (req, res, next) {
//     if (err) {
//       res.send(401);
//     } else {
//       database.validateLogin(token.email, token.password)
//         .then((result) => {
//           const userId = result[0].id
//           database.returningReceipts(userId)
//             .then((result) => {
//               res.send(result.rows);
//             })
//         });
//     }
// })


router.post('/submit', function (req, res, next) {
  console.log(req.body);
  database.insertReceipt(req.body)
    .then(res.end());

});

module.exports = router;