var querystring = require('querystring');
var https = require('https');
var baseUrl = 'https://api.mconnectedlab.com/sial/safety/solrservice/safety/searchMobppe/${PRODUCT_ID}';
var delimiter = '.';

var getProtectiveInfo = function ( productId , attr){
	var _url = baseUrl;
	var _attr = "ppe"+attr;
	var _str = '';
	_url = _url.replace("${PRODUCT_ID}", productId);
	var request = https.get(_url, function(response) {
		response.on('data', function(chunk) {
				 _str += chunk;
		});
		response.on('end', function () {
			var _json =   JSON.parse(_str);
			var _attrdes = _json[0][_attr].split(delimiter);
			console.log(_attrdes[0] + _attrdes[0] );
		});
	});
}	

getProtectiveInfo("C5776" , "hands");
	
	
	
	
	




