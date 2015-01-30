var assert = require("assert"),
    inflections = require("inflections"),
    singularize = require("../src/index");


describe("singularize(string : String, locale : String)", function() {
    it("should singularize string", function() {
        var en = inflections("en");

        en.singular(/s$/i, "");
        en.singular(/(ch|sh|ss|[sxz])es$/i, "$1");
        en.singular(/([^aeiouy])ies$/i, "$1y");

        assert.equal(singularize("words"), "word");
        assert.equal(singularize("skies"), "sky");
        assert.equal(singularize("boxes"), "box");
    });
});
