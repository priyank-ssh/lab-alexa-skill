
const propertyClient = require('./propertyClient');


function getProductProperty(product, property) {
    const resp =  propertyClient.getProductProperty(product, property);
    return resp;
}

module.exports = {
    getProductProperty: getProductProperty,
};
