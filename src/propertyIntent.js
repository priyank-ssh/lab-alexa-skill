const slotMapping = require('./slotMapping');
const propertyClient = require('./propertyClient');


const marvelMetals = [
    "vibranium",
    "adamantium"
];


function getProductProperty(product, property, callback) {
    if (marvelMetals.indexOf(product) >= 0) {
        return speakNerd(product);
    }
    const productID = slotMapping.productNameToProductId[product];
    const propertyKey = slotMapping.propertyToKey[property];
    propertyClient.getAllProductProperties(productID, callback);
        
}

function getAllProductProperties(product, callback) {
    const productID = slotMapping.productNameToProductId[product];
   // const propertyKey = slotMapping.propertyToKey[property];
    propertyClient.getAllProductProperties(productID, callback);
}


function speakNerd(product) {
    let speechOutput = "Face front, true believer"
    switch (product)
    {
        case "vibranium":
            speechOutput = "Vibranium was first deposited on Earth by a meteorite 10,000 years ago. " +
                "This particular isotope of Vibranium was dubbed Anti-Metal due to its " +
                "property of dissolving other metals.";
            break;
        case "adamantium":
            speechOutput = "Adamantium is a very dense, artificial, iron-based alloy that is virtually indestructible. " +
                "A sufficient amount is capable of surviving multiple nuclear explosions with no damage";
            break;

        default:
            break;
    }
    callback(null, '');
}


module.exports = {
    getProductProperty: getProductProperty,
    getAllProductProperties:getAllProductProperties
};
