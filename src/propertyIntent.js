const slotMapping = require('./slotMapping');
const propertyClient = require('./propertyClient');


function getProductProperty(product, property, callback) {
    const productID = slotMapping.productNameToProductId[product];
    const propertyKey = slotMapping.propertyToKey[property];
    propertyClient.getProductProperty(productID, propertyKey, callback);
}

module.exports = {
    getProductProperty: getProductProperty,
};
