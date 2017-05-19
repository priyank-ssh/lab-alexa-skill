var request = require('request');

 function getProductProperty(catalogNumber, infoFor, callback) {
     var url = 'https://api.mconnectedlab.com/sial/safety/solrservice/safety/mobsearch/'+catalogNumber;
    // console.log(url)

     request(url, function (error, response, body) {
         if (error) return callback(error, null);
         if (!error && response.statusCode == 200) {
             var jsonData  = JSON.parse(body)
             var firstResult = jsonData[0];
             if (typeof firstResult === 'undefined') {
                return callback(null, 'Sorry! I dont have any data available for this product');
             }
             var str = firstResult[infoFor];
             if (infoFor === 'melting_point' || infoFor === 'boiling_point' || infoFor === 'flash_point') {
                 str = str.replace(" C"," degree celcius");
                // console.log(jsonData[0][infoFor]);
                console.log(str);
             }
             if (str === 'No Data Available') {
                 str = "Sorry! I dont have any data available for this property";
             }
             callback(null, str);
         }
     })

 }

// getProductProperty('00010','melting_point');


 module.exports = {
    getProductProperty: getProductProperty,
};
