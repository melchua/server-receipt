var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
	res.json([{
		id: 1,
		location: "T&T",
		total: 2.00,
		created_at: "March 10 2018",
		user: "Sam",
		image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
		category_id: "food",
		status: "Pending",
		approve_by: ""	  
	}, {
		id: 2,
		location: "Mcdonalds",
		total: 22.00,
		created_at: "March 29 2018",
		user: "Bob",
		image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
		category_id: "food",
		status: "Approve",
		approve_by: "fantastic four"
	}, {
		id:3,
		location: "Tim Hortons",
		total: 92.00,
		created_at: "May 11 2018",
		user: "Sam",
		image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
		category_id: "food",
		status: "Rejected",
		approve_by: "fantastic four"
	},{
		id:4,
		location: "Lighthouse Labs",
		total: 10000.00,
		created_at: "May 20 2018",
		user: "Sam",
		image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
		category_id: "food",
		status: "Rejected",
		approve_by: "fantastic four"
  }]);
});

module.exports = router;