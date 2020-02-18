const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
    let federalTerritoriesList

    if (global.getDefaultLanguage() === LANGUAGES.ENGLISH | global.getDefaultLanguage() === LANGUAGES.MALAY) {
        federalTerritoriesList = {
            federal_territories: [
                'Kuala Lumpur',
                'Labuan',
                'Putrajaya'
            ]
        }
    } else if (global.getDefaultLanguage() === LANGUAGES.CHINESE) {
        federalTerritoriesList = {
            federal_territories: [
                '吉隆坡',
                '纳闽',
                '布城'
            ]
        }
    }

    return federalTerritoriesList
}