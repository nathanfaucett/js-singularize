var tape = require("tape"),
    inflections = require("inflections"),
    singularize = require("..");


tape("singularize(string : String, locale : String)", function(assert) {
    var en = inflections("en");

    en.singular(/s$/i, "");
    en.singular(/(ch|sh|ss|[sxz])es$/i, "$1");
    en.singular(/([^aeiouy])ies$/i, "$1y");

    assert.equal(singularize("words"), "word");
    assert.equal(singularize("skies"), "sky");
    assert.equal(singularize("boxes"), "box");

    assert.end();
});
