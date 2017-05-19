const protocol = require('./protocolMapping');

exports.productNameToProductId = {
    'cocaine hydrochloride': 'C5776',
    'cocaine': 'C5776',
    'abeitic acid':'0010',
    'sodium phosphate':'342483',
    'trizma base': 'T1503',
    'dichlorophene':'35992',
	'chloromethyl methyl sulfide':'C54007',
	'phenyl cyanate solution':'744417',
	'hydrogen bromide': '295418'
};


exports.bodyToKey = {
  'arm': 'arm',
  'leg': 'leg',
};


exports.propertyToKey = {
  'melting point': 'melting_point',
  'boiling point': 'boiling_point',
	'density':'density'
};


exports.productToProtocol = {
    'cocaine hydrochloride': protocol.cocaine,
    'abeitic acid':'0010',

};
