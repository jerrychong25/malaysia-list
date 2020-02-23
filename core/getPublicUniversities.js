const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
  let publicUniversitiesList

  switch (global.getDefaultLanguage()) {
    case LANGUAGES.ENGLISH:
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
      break
    case LANGUAGES.MALAY:
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
      break
    case LANGUAGES.CHINESE:
      publicUniversitiesList = {
        public_universities: [
          '马来亚大学',
          '马来西亚国立大学',
          '马来西亚博特拉大学',
          '马来西亚理科大学',
          '马来西亚工艺大学',
          '马来西亚北方大学',
          '马来西亚国际伊斯兰大学',
          '马来西亚彭亨大学',
          '马来西亚玻璃市大学',
          '马来西亚沙巴大学',
          '马来西亚砂拉越大学',
          '马来西亚登嘉楼大学',
          '苏丹依德利斯师范大学',
          '马来西亚吉兰丹大学',
          '马来西亚国防大学',
          '马来西亚伊斯兰理科大学',
          '苏丹再纳阿比丁大学',
          '马来西亚马六甲技术大学',
          '马来西亚敦胡先翁大学',
          '玛拉工艺大学'
        ]
      }
      break
    default:
      break
  }

  return publicUniversitiesList
}
