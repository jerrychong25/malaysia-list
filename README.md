# Malaysia List

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://www.npmjs.com/package/malaysia-list)
[![GitHub release](https://img.shields.io/github/release/jerrychong25/malaysia-list.svg)](https://gitHub.com/jerrychong25/malaysia-list/releases/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/jerrychong25/malaysia-list/graphs/commit-activity)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjerrychong25%2Fmalaysia-list&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Getting Started

This npm package displays all lists related to Malaysia.

## Usage

### init() - Set default language

#### Language Options
English - en<br>
Malay - ms<br>
Chinese - zh

#### Code Example

```js
const malaysiaList = require('malaysia-list');
malaysiaList.init('en');      // Set English as default language
```

### getStates() - Return all states

#### Code Example

```js
malaysiaList.getStates();
```

#### Response (English / Malay)

```js
{
  "states": [
    "Johor Darul Ta'zim",
    "Kedah Darul Aman",
    "Kelantan Darul Naim",
    "Malacca",
    "Negeri Sembilan Darul Khusus",
    "Pahang Darul Makmur",
    "Penang",
    "Perak Darul Ridzuan",
    "Perlis Indera Kayangan",
    "Sabah",
    "Sarawak",
    "Selangor Darul Ehsan",
    "Terengganu Darul Iman"
  ]
}
```

#### Response (Chinese)

```js
{
  "states": [
    "柔佛",
    "吉打",
    "吉兰丹",
    "马六甲",
    "森美兰",
    "彭亨",
    "槟城",
    "霹雳",
    "玻璃市",
    "沙巴",
    "砂拉越",
    "雪兰莪",
    "登嘉楼"
  ]
}
```

### getFederalTerritories() - Return all federal territories

#### Code Example

```js
malaysiaList.getFederalTerritories();
```

#### Response (English / Malay)

```js
{
  "federal_territories": [
    "Kuala Lumpur",
    "Labuan",
    "Putrajaya"
  ]
}
```

#### Response (Chinese)

```js
{
  "federal_territories": [
    "吉隆坡",
    "纳闽",
    "布城"
  ]
}
```

### getPublicUniversities() - Return all public universities

#### Code Example

```js
malaysiaList.getPublicUniversities();
```

#### Response (English)

```js
{
  "public_universities":[
    "University of Malaya",
    "National University of Malaysia",
    "Putra University, Malaysia",
    "University of Science, Malaysia",
    "University of Technology, Malaysia",
    "Northern University of Malaysia",
    "International Islamic University Malaysia",
    "University of Malaysia Pahang",
    "University of Malaysia Perlis",
    "University of Malaysia Sabah",
    "University of Malaysia Sarawak",
    "University of Malaysia Terengganu",
    "Sultan Idris Education University",
    "University of Malaysia Kelantan",
    "National Defence University of Malaysia",
    "Islamic Science University of Malaysia",
    "Sultan Zainal Abidin University",
    "Technical University of Malaysia Malacca",
    "Tun Hussein Onn University of Malaysia",
    "MARA University of Technology"
  ]
}
```

#### Response (Malay)

```js
{
  "public_universities":[
    "Universiti Malaya",
    "Universiti Kebangsaan Malaysia",
    "Universiti Putra Malaysia",
    "Universiti Sains Malaysia",
    "Universiti Teknologi Malaysia",
    "Universiti Utara Malaysia",
    "Universiti Islam Antarabangsa Malaysia",
    "Universiti Malaysia Pahang",
    "Universiti Malaysia Perlis",
    "Universiti Malaysia Sabah",
    "Universiti Malaysia Sarawak",
    "Universiti Malaysia Terengganu",
    "Universiti Pendidikan Sultan Idris",
    "Universiti Malaysia Kelantan",
    "Universiti Pertahanan Nasional Malaysia",
    "Universiti Sains Islam Malaysia",
    "Universiti Sultan Zainal Abidin",
    "Universiti Teknikal Malaysia Melaka",
    "Universiti Tun Hussein Onn Malaysia",
    "Universiti Teknologi MARA"
  ]
}
```

#### Response (Chinese)

```js
{
  "public_universities":[
    "马来亚大学",
    "马来西亚国立大学",
    "马来西亚博特拉大学",
    "马来西亚理科大学",
    "马来西亚工艺大学",
    "马来西亚北方大学",
    "马来西亚国际伊斯兰大学",
    "马来西亚彭亨大学",
    "马来西亚玻璃市大学",
    "马来西亚沙巴大学",
    "马来西亚砂拉越大学",
    "马来西亚登嘉楼大学",
    "苏丹依德利斯师范大学",
    "马来西亚吉兰丹大学",
    "马来西亚国防大学",
    "马来西亚伊斯兰理科大学",
    "苏丹再纳阿比丁大学",
    "马来西亚马六甲技术大学",
    "马来西亚敦胡先翁大学",
    "玛拉工艺大学"
  ]
}
```

### getPrimeMinisters() - Return all prime ministers

#### Code Example

```js
malaysiaList.getPrimeMinisters();
```

#### Response (English / Malay)

```js
{
  "prime_ministers": [
    "Tunku Abdul Rahman Putra Al-Haj ibni Almarhum Sultan Abdul Hamid Halim Shah",
    "Tun Haji Abdul Razak bin Dato' Hussein",
    "Tun Hussein bin Dato' Onn",
    "Mahathir bin Mohamad",
    "Abdullah bin Haji Ahmad Badawi",
    "Mohammad Najib bin Tun Haji Abdul Razak",
    "Mahathir bin Mohamad",
    "Muhyiddin bin Haji Muhammad Yassin"
  ]
}
```
#### Response (Chinese)

```js
{
  "prime_ministers": [
    "东古·阿卜杜勒·拉赫曼",
    "阿卜杜勒·拉扎克·侯赛因",
    "侯赛因·奥恩",
    "马哈蒂尔·穆罕默德",
    "阿卜杜拉·巴达维",
    "纳吉布·阿卜杜勒·拉扎克",
    "马哈蒂尔·穆罕默德",
    "穆希丁·雅辛"
  ]
}
```

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Versioning

[Semantic Versioning (SemVer) 2.0.0](http://semver.org/)

## Authors

**Jerry Chong** - [jerrychong25](https://github.com/jerrychong25)<br>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
