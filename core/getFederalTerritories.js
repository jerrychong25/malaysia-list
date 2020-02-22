const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
  let federalTerritoriesList

  switch (global.getDefaultLanguage()) {
    case LANGUAGES.ENGLISH:
    case LANGUAGES.MALAY:
      federalTerritoriesList = {
        federal_territories: [
          'Kuala Lumpur',
          'Labuan',
          'Putrajaya'
        ]
      }
      break
    case LANGUAGES.CHINESE:
      federalTerritoriesList = {
        federal_territories: [
          '吉隆坡',
          '纳闽',
          '布城'
        ]
      }
      break
    default:
      break
  }

  return federalTerritoriesList
}
