const protectiveClient = require('./protectiveClient');
const slotMapping = require('./slotMapping');


function getProtective(productName, bodyPart,callback) {
    const productId = slotMapping.productNameToProductId[productName];
	console.log("product name : " + productName + "mapped to product id" +productId)
	var resp =  protectiveClient.getProtectiveInfo(productId, bodyPart,callback);
    return resp;
}

module.exports = {
    getProtective: getProtective,
};
//getProtective("cocaine", "hands");