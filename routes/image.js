var express = require('express');
var router = express.Router();
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();
let result =

/* GET users listing. */
router.get('/', function(req, res, next) {

  // And insert something like this instead:
  res.json([{
    id: 1,
    username: "Hi"
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

router.post('/', function(req, res, next) {

  var imagelink = req.body.url
  console.log(imagelink)
  client
  .documentTextDetection(imagelink)
  .then(results => {
    const fullTextAnnotation = results[0].fullTextAnnotation;
    result = fullTextAnnotation.text
    console.log(result);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

})

module.exports = router;