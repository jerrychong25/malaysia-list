module.exports = () => {
    return `Installation success for malaysia-list library!`;
}

module.exports.getStates = (language) => {

    let statesList

    if (language === 'en' | language === 'ms') {
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
    } else if (language === 'zh') {
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

module.exports.getFederalTerritories = (language) => {

    let federalTerritoriesList

    if (language === 'en' | language === 'ms') {
        federalTerritoriesList = {
            federal_territories: [
                'Kuala Lumpur',
                'Labuan',
                'Putrajaya'
            ]
        }
    } else if (language === 'zh') {
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