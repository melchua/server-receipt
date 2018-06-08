var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


const database = require("./data/database");
const bodyParser = require('body-parser');


/* GET /projects */
/* returns project listing of all projects */
router.get('/', function (req, res, next) {
  // console.log("route is working!!!!");
   database.returnProjectList()
     .then((result) => {
       console.log('rows: ', result);
       res.send(result);
     }).catch((err) => console.error("Error:", err));
});

router.post('/', function (req, res, next) {
  console.log("receipt id", req.body.project_name)
  database.insertProject(req.body.project_name)
    .then(res.end())
    .catch((error) => {
      console.log(error)
    })
});

module.exports = router;