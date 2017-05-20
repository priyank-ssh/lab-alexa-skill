const protocol = require('./protocolMapping');

exports.productNameToProductId = {
    'cocaine hydrochloride': 'C5776',
    'cocaine': 'C5776',
    'abeitic acid': '00010',
    'sodium phosphate':'342483',
    'trizma base': 'T1503',
    'triz': 'T1503',
    'dichlorophene': '35992',
    'chloromethyl methyl sulfide': 'C54007',
    'phenyl cyanate solution': '744417',
    'benzoic acid': '242381',
};


exports.bodyToKey = {
    'arm': 'arm',
    'leg': 'leg',
};

exports.bodyToExposeKey = {
    'eye': 'eye',
    'eyes': 'eye',
    'eye balls': 'eye',
    'skin': 'skin',
    'nose': 'skin',
    'hand': 'skin',
    'hands': 'skin',
    'foot': 'skin',
    'feet': 'skin',
    'body': 'skin',
    'arms': 'skin',
    'leg': 'skin',
    'legs': 'skin',
    'mouth': 'mouth',
    'ingest': 'mouth',
    'swallow': 'mouth',
    'tongue': 'mouth'
};

exports.propertyToKey = {
    'physical form': 'physical_form',
    'molecular weight': 'molec_weight',
    'boiling point': 'boiling_point',
    'melting point': 'melting_point',
    'flash point': 'flash_point',
    'flashpoint': 'flash_point',
    'vapor pressure': 'vapor_pressure',
    'density': 'density',
    'p h': 'ph',  // "p h" is probably how alexa comprehends PH
    'hazard class': 'hazard_class',
    'pictogram': 'pictogram',
};


exports.productToProtocol = {
    'cocaine hydrochloride': protocol.cocaineHydrochloride,
    'cocaine': protocol.cocaine,
    'abeitic acid': protocol.abeiticAcid,
    'sodium phosphate': protocol.sodiumPhosphate,
    'trizma base': protocol.trizmaBase,
    'dichlorophene': protocol.dichlorophene,
    'chloromethyl methyl sulfide': protocol.chloromethylMethylSulfide,
    'phenyl cyanate solution': protocol.phenylCyanateSolution,
    'hydrogen bromide': protocol.hydrogenBromide,
    'benzoic acid': protocol.abeiticAcid,  // for demo
};
