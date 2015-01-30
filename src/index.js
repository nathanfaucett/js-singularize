var inflections = require("inflections");


module.exports = function singularize(string, locale) {
    return inflections(locale).singularize(string);
};
