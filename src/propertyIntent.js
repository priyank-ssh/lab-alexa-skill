const slotMapping = require('./slotMapping');
const propertyClient = require('./propertyClient');


function getProductProperty(product, property) {
    const productID = slotMapping.productNameToProductId[product];
    const propertyKey = slotMapping.propertyToKey[property];
    const resp =  propertyClient.getProductProperty(productID, propertyKey);
    return resp;
}

module.exports = {
    getProductProperty: getProductProperty,
};
