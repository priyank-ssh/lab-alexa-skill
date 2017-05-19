const request = require('request');
const baseUrl = 'https://api.mconnectedlab.com/sial/safety/solrservice/safety/searchMobppe/${PRODUCT_ID}';
const delimiter = '.';

module.exports = {
	getProtectiveInfo: getProtectiveInfo,
};


function getProtectiveInfo(productId, attr) {
	console.log();
	let _url = baseUrl;
	let _attr = "ppe" + attr;
	let _str = '';
	_url = _url.replace("${PRODUCT_ID}", productId);
	request(_url, function (error, response, body) {
		if (error) return callback(error, null);
		if (!error && response.statusCode == 200) {
			var _json = JSON.parse(body);
			var _attrdes = _json[0][_attr].split(delimiter);
			console.log(_attrdes[0] + _attrdes[1]);
			var str = _attrdes[0] + _attrdes[1] + ".";

			callback(null, str);
		}

	});
}











