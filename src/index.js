var inflections = require("inflections");


module.exports = singularize;


function singularize(string, locale) {
    return inflections(locale).singularize(string);
}
