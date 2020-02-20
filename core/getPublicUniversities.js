const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
    let publicUniversitiesList

    if (global.getDefaultLanguage() === LANGUAGES.ENGLISH) {
        publicUniversitiesList = {
            public_universities: [
                'University of Malaya',
                'National University of Malaysia',
                'Putra University, Malaysia',
                'University of Science, Malaysia',
                'University of Technology, Malaysia',
                'Northern University of Malaysia',
                'International Islamic University Malaysia',
                'University of Malaysia Pahang',
                'University of Malaysia Perlis',
                'University of Malaysia Sabah',
                'University of Malaysia Sarawak',
                'University of Malaysia Terengganu',
                'Sultan Idris Education University',
                'University of Malaysia Kelantan',
                'National Defence University of Malaysia',
                'Islamic Science University of Malaysia',
                'Sultan Zainal Abidin University',
                'Technical University of Malaysia Malacca',
                'Tun Hussein Onn University of Malaysia',
                'MARA University of Technology'
            ]
        }
    } else if (global.getDefaultLanguage() === LANGUAGES.MALAY) {
        publicUniversitiesList = {
            public_universities: [
                'Universiti Malaya',
                'Universiti Kebangsaan Malaysia',
                'Universiti Putra Malaysia',
                'Universiti Sains Malaysia',
                'Universiti Teknologi Malaysia',
                'Universiti Utara Malaysia',
                'Universiti Islam Antarabangsa Malaysia',
                'Universiti Malaysia Pahang',
                'Universiti Malaysia Perlis',
                'Universiti Malaysia Sabah',
                'Universiti Malaysia Sarawak',
                'Universiti Malaysia Terengganu',
                'Universiti Pendidikan Sultan Idris',
                'Universiti Malaysia Kelantan',
                'Universiti Pertahanan Nasional Malaysia',
                'Universiti Sains Islam Malaysia',
                'Universiti Sultan Zainal Abidin',
                'Universiti Teknikal Malaysia Melaka',
                'Universiti Tun Hussein Onn Malaysia',
                'Universiti Teknologi MARA'
            ]
        }
    }

    return publicUniversitiesList
}