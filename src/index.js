var inflections = require("@nathanfaucett/inflections");


module.exports = singularize;


function singularize(string, locale) {
    return inflections(locale).singularize(string);
}
