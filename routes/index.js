var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.send("hello");
=======
  res.render('index', { title: 'Receipt' });
>>>>>>> f6ed3bcd6efbf89a488f6d98d337028fc185e126
});

module.exports = router;
