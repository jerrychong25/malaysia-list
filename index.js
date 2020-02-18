const global = require('./helpers/global')
const { LANGUAGES } = require('./helpers/constants')

module.exports.init = (defaultLanguage) => {
    global.setDefaultLanguage(defaultLanguage);
}

module.exports.getStates = () => {
    let statesList

    if (global.getDefaultLanguage() === LANGUAGES.ENGLISH | global.getDefaultLanguage() === LANGUAGES.MALAY) {
        statesList = {
            states: [
                'Johor Darul Ta\'zim',
                'Kedah Darul Aman',
                'Kelantan Darul Naim',
                'Malacca',
                'Negeri Sembilan Darul Khusus',
                'Pahang Darul Makmur',
                'Penang',
                'Perak Darul Ridzuan',
                'Perlis Indera Kayangan',
                'Sabah',
                'Sarawak',
                'Selangor Darul Ehsan',
                'Terengganu Darul Iman'
            ]
        }
    } else if (global.getDefaultLanguage() === LANGUAGES.CHINESE) {
        statesList = {
            states: [
                '柔佛',
                '吉打',
                '吉兰丹',
                '马六甲',
                '森美兰',
                '彭亨',
                '槟城',
                '霹雳',
                '玻璃市',
                '沙巴',
                '砂拉越',
                '雪兰莪',
                '登嘉楼'
            ]
        }
    }

    return statesList
}

module.exports.getFederalTerritories = () => {

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