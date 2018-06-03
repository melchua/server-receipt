const database = require("./data/database");
var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var app = express()
var fs = require("fs")
var uuid = require('node-uuid')

//Google vision
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

function googleVision(image){

  return client
    .documentTextDetection(image)
    .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation;
      return ocrCheck(fullTextAnnotation.text);
    })

    function ocrCheck(ocrresult) {
      let string = ocrresult

      const pricereg = /^[$0-9]+(\.[0-9]{2})$/gm
      const datereg = /((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))/gm

      let pricefound = string.match(pricereg)
      let datefound = string.match(datereg)
      let date = datefound[0]

      let priceresult = pricefound.map(function(price){
        if (price[0] === "$") {
          price = price.slice(1)
        }
        return parseFloat(price)
      })

      let biggest = Math.max(...priceresult);
      console.log("TOTAL:" + biggest)
      console.log("PURCHASED DATE:" + date)
      var results ={
        "total": biggest,
        "date": date
      }
      console.log("what i am sending to phone", results)
      return results
    }

  }

  router.post('/', function(req, res, next) {
  var photoname = uuid.v1()
  var buf= Buffer.from(req.body.photo.base64, 'base64')  
  var photoPath = 'tmp/' + photoname + '.png'
  fs.writeFile(photoPath, buf, (err)=>{
    if(err) throw err;
    googleVision(photoPath)
      .then((result) => res.json(result))
      .catch(next);
  })
  
});
console.log(process.cwd())
module.exports = router;