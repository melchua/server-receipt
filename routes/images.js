const database = require("./data/database");
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();


//Google vision
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

function verifyToken(token) {
  var decoded = jwt.verify(token, 'wakawaka');
  console.log("decoded", decoded);
  // return decoded.email;
}

function amazonUpload(image) {
  let imageName = image.replace("tmp/", "");
  var bucketName = 'lhl-final-receipt';
  return new Promise ((resolve, reject) => {
    fs.readFile(image, function (err, data) {
      if (err) throw err;
      params = {Bucket: bucketName, Key: imageName, Body: data };
      s3.upload(params, function(err, data) {
        if (err) {
          console.log("error in upload", err)
          reject(err);
        } else {
          fs.unlink(image, (err)=> {
            if (err) throw err;
            console.log("file delete sucess!");
          });
          resolve(data.Location);
        }
      });
    });
  });

}


function amzGoog(image, id) {

  return Promise.all([amazonUpload(image), client.documentTextDetection(image)]).then(results => {
    console.log("first result:", results[0]);
    console.log("second result:", results[1]);
    const fullTextAnnotation = results[1][0].fullTextAnnotation;
    return ocrCheckAmz(fullTextAnnotation.text, results[0]);
  })


  function ocrCheckAmz(ocrResult, link) {
    //Parsing data from OCR
    let string = ocrResult
    const pricereg = /^[$0-9]+(\.[0-9]{2})$/gm
    const datereg = /((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))/gm
    let pricefound = string.match(pricereg)
    let datefound = string.match(datereg)
    let date = ""
    let biggest = ""
    let priceresult = pricefound.map(function (price) {
      if (price[0] === "$") {
        price = price.slice(1)
      }
      return parseFloat(price)
    })
    if (priceresult.length > 0) {
      biggest = Math.max(...priceresult);
    }
    if (datefound.length > 0) {
      date = datefound[0]
    }
    var results = {
      "total": biggest,
      "date": date,
      "user_id": id,
      "image_url": link,
    }
    console.log("what i am sending to phone", results)
    return results
  }
}

router.post('/', function (req, res, next) {
  jwt.verify(req.headers.authorization.split(' ')[1], 'wakawaka', function (err, token) {
    if (err) {
      res.send(401);
    } else {
      database.validateLogin(token.email, token.password)
        .then((result) => {
          const userId = result[0].id
          var photoname = uuid.v1();
          var buf = Buffer.from(req.body.photo.base64, 'base64');
          var photoPath = 'tmp/' + photoname + '.png';
          fs.writeFile(photoPath, buf, (err) => {
            if (err) throw err;
            console.log(userId)
            database.returningUsers(userId)
              .then((result) =>
                amzGoog(photoPath, userId)
                .then((result) => res.json(result))
                .catch(next)
              );
          });
        })
    }
  });
});
module.exports = router;