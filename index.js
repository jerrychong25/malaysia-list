module.exports = (str) => {
    return `Installation success for malaysia-list library. Your text: ${str}`;
}

module.exports.getStates = (language) => {
    return {
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
}