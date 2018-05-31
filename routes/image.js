var express = require('express');
var router = express.Router();
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();
let result =

/* GET parsed text */
router.get('/', function(req, res, next) {
  res.json({parsedtext: result})
});

// POST image to google vision
router.post('/', function(req, res, next) {
  const imagelink = req.body.url;
  console.log(imagelink);
  client
  .documentTextDetection(imagelink)
  .then(results => {
    const fullTextAnnotation = results[0].fullTextAnnotation;
    result = fullTextAnnotation.text
    console.log(result)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

})

module.exports = router;