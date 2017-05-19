var request = require('request');

 function getProductProperty(catalogNumber,infoFor){
     var url = 'https://api.mconnectedlab.com/sial/safety/solrservice/safety/mobsearch/'+catalogNumber;
    // console.log(url)
    
     request(url, function (error, response, body) {
     if (!error && response.statusCode == 200) {
         var jsonData  = JSON.parse(body)
         var singleProperty = jsonData[0];
         // console.log(singleProperty)
         /*for (var i = 0; i < jsonData.length; i++) {
             singleProperty = jsonData[i];
            console.log(singleProperty)
         }*/
         var str=jsonData[0][infoFor];
         if(infoFor ==  'melting_point' || infoFor == 'boiling_point' ){
             
             str = str.replace(" C"," degree celcius");
            // console.log(jsonData[0][infoFor]);
            console.log(str);
         }
       
         return str;
       }
     })
 
 } 

getProductProperty('00010','melting_point');

 
 module.exports = {
    getProductProperty: getProductProperty,
};
