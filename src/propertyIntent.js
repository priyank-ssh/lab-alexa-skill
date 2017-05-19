
const propertyClient = require('./propertyClient');
const slot = require('./slotMapping');

function getProductProperty(product,property) {
    
    propertyClient.getProductProperty('','');
    return "Glasses"
}

module.exports = {
    getProductProperty: getProductProperty,
};
