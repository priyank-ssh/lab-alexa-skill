const protectiveClient = require('./protectiveClient');
const slotMapping = require('./slotMapping');


function getProtective(productName, bodyPart) {
    const productId = slotMapping.productNameToProductId[productName];
	console.log("product name : " + productName + "mapped to product id" +productId)
	var resp =  protectiveClient.getProtectiveInfo(productId, bodyPart);
    return resp;
}

module.exports = {
    getProtective: getProtective,
};
//getProtective("cocaine", "hands");