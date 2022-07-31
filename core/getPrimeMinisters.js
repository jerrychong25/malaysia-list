const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
  let primeMinistersList

  switch (global.getDefaultLanguage()) {
    case LANGUAGES.ENGLISH:
    case LANGUAGES.MALAY:
      primeMinistersList = {
        prime_ministers: [
          'Tunku Abdul Rahman Putra Al-Haj ibni Almarhum Sultan Abdul Hamid Halim Shah',
          'Tun Haji Abdul Razak bin Dato\' Hussein',
          'Tun Hussein bin Dato\' Onn',
          'Mahathir bin Mohamad',
          'Abdullah bin Haji Ahmad Badawi',
          'Mohammad Najib bin Tun Haji Abdul Razak',
          'Mahathir bin Mohamad',
          'Muhyiddin bin Haji Muhammad Yassin',
          'Dato Sri Ismail Sabri bin Yaakob'
        ]
      }
      break
    case LANGUAGES.CHINESE:
      primeMinistersList = {
        prime_ministers: [
          '东古·阿卜杜勒·拉赫曼',
          '阿卜杜勒·拉扎克·侯赛因',
          '侯赛因·奥恩',
          '马哈蒂尔·穆罕默德',
          '阿卜杜拉·巴达维',
          '纳吉布·阿卜杜勒·拉扎克',
          '马哈蒂尔·穆罕默德',
          '穆希丁·雅辛',
          '依斯迈沙比里'
        ]
      }
      break
      case LANGUAGES.TAMIL:
        primeMinistersList = {
          prime_ministers: [
            'துங்கு அப்துல் ரகுமான்',
            'அப்துல் ரசாக் உசேன்',
            'உசேன் ஓன்',
            'மகாதீர் பின் முகமது',
            'அப்துல்லா அகமது படாவி',
            'நஜீப் ரசாக்',
            'மகாதீர் பின் முகமது',
            'முகிதீன் யாசின்',
            'இஸ்மாயில் சப்ரி யாகோப்'
          ]
        }
        break
    default:
      break
  }

  return primeMinistersList
}
