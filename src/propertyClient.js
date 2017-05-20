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
                 str = `There is no data available for that property.`;
             }
             callback(null, str);
         }
     })

 }

// getProductProperty('00010','melting_point');

function getAllProductProperties(catalogNumber, callback){
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
             //  var str = firstResult[infoFor];

             // console.log(firstResult)

             var str="";
             if(firstResult['melting_point'] != 'No Data Available'){
                 tmp = `melting point is ${firstResult['melting_point']}. `;
                 str =str + tmp.replace(" C"," degree celcius");

             }
             if(firstResult['boiling_point'] != 'No Data Available'){
                 tmp = `boiling point is ${firstResult['boiling_point']}. `;
                 str = str + tmp.replace(" C"," degree celcius");

             }
             if(firstResult['flash_point'] != 'No Data Available'){
                 str = `flash point is ${firstResult['flash_point']}. `;
                 str = str + tmp.replace(" C"," degree celcius");

             }
             if(firstResult['density'] != 'No Data Available'){
                 str = str + `density is ${firstResult['density']}. `;
                // str = str.replace(" C"," degree celcius")

             }
             if(firstResult['molec_weight'] != 'No Data Available'){
                 str = str + `molecular weight is ${firstResult['molec_weight']}. `;
                // str = str.replace(" C"," degree celcius")

             }
             //console.log(str);
             callback(null, str);
         }
     })

}

module.exports = {
    getProductProperty: getProductProperty,
    getAllProductProperties:getAllProductProperties
};
