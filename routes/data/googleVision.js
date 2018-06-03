/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * 
 * 
 * 
**/

var fs =  require('fs');


//Google vision
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

function googleVision(image){
    console.log("ran googlefunction")
    let ocrresult = ""
    //google vision runthrough

    client
    .documentTextDetection(image)
    .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        ocrresult = fullTextAnnotation.text
        ocrCheck(ocrresult)
    })
    .catch(err => {
        console.error('ERROR:', err);
    });


    function ocrCheck(ocrresult) {
    let string = ocrresult

        const pricereg = /^[$0-9]+(\.[0-9]{2})$/gm
        const datereg = /((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))/gm

        let pricefound = string.match(pricereg)
        let datefound = string.match(datereg)
        let date = datefound[0]

        console.log("whole price array:" + pricefound)
        console.log("whole date array:" + datefound)

        let priceresult = pricefound.map(function(price){
        if (price.slice(0, 1) === "$") {
            price = price.slice(1)
        }
        return parseFloat(price)
    })

    let biggest = Math.max.apply(Math, priceresult)
    console.log("TOTAL:" + biggest)
    console.log("PURCHASED DATE:" + date)
    }

}
exports.googleVision = googleVision
