const slotMapping = require('./slotMapping');

function getProtocol(product, contact) {
    const protocols = slotMapping.productToProtocol[product];
    return protocols[contact];
}

module.exports = {
    getProtocol: getProtocol,
};
