// Global Variables
let defaultLanguage = null

module.exports.setDefaultLanguage = function (language) { 
    defaultLanguage = language
};

module.exports.getDefaultLanguage = function () { 
    return defaultLanguage
};