const protectiveClient = require('./protectiveClient');

function getProtective(productName, bodyPart) {

    // TODO: get productId from slotMapping.productNameToProductId
    var productId = '';
    // TODO: get bodyKey from slotMapping.bodyToKey
    var bodyKey = '';
    var resp =  protectiveClient.getProtectiveInfo(productId, bodyKey);
    return resp;
}

module.exports = {
    getProtective: getProtective,
};
