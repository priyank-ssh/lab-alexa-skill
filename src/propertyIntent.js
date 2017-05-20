const slotMapping = require('./slotMapping');
const propertyClient = require('./propertyClient');


function getProductProperty(product, property, callback) {
    const productID = slotMapping.productNameToProductId[product];
    const propertyKey = slotMapping.propertyToKey[property];
    propertyClient.getProductProperty(productID, propertyKey, callback);

}

function getAllProductProperties(product, callback) {
    const productID = slotMapping.productNameToProductId[product];
   // const propertyKey = slotMapping.propertyToKey[property];
    propertyClient.getAllProductProperties(productID, callback);
}



module.exports = {
    getProductProperty: getProductProperty,
    getAllProductProperties:getAllProductProperties
};
