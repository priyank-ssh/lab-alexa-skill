const slotMapping = require('./slotMapping');

function getProtocol(product, contact, callback) {
    const protocols = slotMapping.productToProtocol[product];
    const expose = slotMapping.bodyToExposeKey[contact];

    callback(null, protocols[expose]);
}

module.exports = {
    getProtocol: getProtocol,
};
