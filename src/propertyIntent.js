
const propertyClient = require('./propertyClient');


function getProductProperty(product,property) {

      var resp =  propertyClient.getProductProperty(product,prop);
    return resp;
}

module.exports = {
    getProductProperty: getProductProperty,
};
