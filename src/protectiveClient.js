const request = require('request');
const baseUrl = 'https://api.mconnectedlab.com/sial/safety/solrservice/safety/searchMobppe/${PRODUCT_ID}';
const delimiter = '.';

module.exports = {
	getProtectiveInfo: getProtectiveInfo,
};


function getProtectiveInfo(productId, attr,callback) {
	console.log();
	let _url = baseUrl;
	let _attr = "ppe" + attr;
	var _str = '';
	_url = _url.replace("${PRODUCT_ID}", productId);
	request(_url, function (error, response, body) {
		if (error) return callback(error, null);
		if (!error && response.statusCode == 200) {
			var _json =   JSON.parse(body);
			if (_json[0] !== undefined  && _json[0][_attr] !== undefined){
				var _attrdes = _json[0][_attr].split(delimiter);
				console.log(_str );
				_str= _attrdes[0] + _attrdes[1]
			 }else{
				 console.log("No Protective measures found in the system for the product" );
				_str = "No Protective measures found in the system for the product";
			 }
			 
			 callback(null, _str);
		 }	
		

	});
}










