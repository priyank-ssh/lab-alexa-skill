const protectiveClient = require('./protectiveClient');
const slotMapping = require('./slotMapping');


function getProtective(productName, bodyPart,callback) {
    const productId = slotMapping.productNameToProductId[productName];
    const bodyAttr = slotMapping.bodyToKey[bodyPart];
  	console.log("product name : " + productName + " mapped to product id" +productId)
  	var resp =  protectiveClient.getProtectiveInfo(productId, bodyAttr, callback);
    return resp;
}

module.exports = {
    getProtective: getProtective,
};
//getProtective("cocaine", "hands");
