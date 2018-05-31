var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Mel"
  }, {
  	id: 2,
  	username: "Sam"
  },{
  	id: 3,
  	username: "Stephen"
  }, {
  	id: 4,
  	username: "Bill"
  }]);
});

module.exports = router;