const global = require('./helpers/global')
// Core Functions Source
const getStates = require('./core/getStates')
const getFederalTerritories = require('./core/getFederalTerritories')
const getPublicUniversities = require('./core/getPublicUniversities')

// Init Function
module.exports.init = (defaultLanguage) => {
    global.setDefaultLanguage(defaultLanguage)
}

// Core Functions
module.exports.getStates = getStates
module.exports.getFederalTerritories = getFederalTerritories
module.exports.getPublicUniversities = getPublicUniversities