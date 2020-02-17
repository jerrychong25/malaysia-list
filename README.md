# Malaysia List

## Getting Started

This npm package displays all lists related to Malaysia.

## Usage

### init() - Set default language

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

#### Response (Simplified Chinese)

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

#### Response (Simplified Chinese)

```js
{
  "federal_territories": [
    "吉隆坡",
    "纳闽",
    "布城"
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