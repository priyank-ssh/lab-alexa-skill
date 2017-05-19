const querystring = require('querystring');
const https = require('https');
const baseUrl = 'https://api.mconnectedlab.com/sial/safety/solrservice/safety/searchMobppe/${PRODUCT_ID}';
const delimiter = '.';

module.exports = {
    getProtectiveInfo: getProtectiveInfo,
};


function getProtectiveInfo( productId , attr){
	let _url = baseUrl;
	let _attr = "ppe"+attr;
	let _str = '';
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
	
	
	
	
	




