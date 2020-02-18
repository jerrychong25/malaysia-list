const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
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