singularize
=======

singularize words, uses global inflector from inflections @nathanfaucett/inflections

```javascript
var singularize = require("@nathanfaucett/singularize"),
    inflections = require("@nathanfaucett/inflections");


var en = inflections("en");

en.singular(/s$/i, "");
en.singular(/(ch|sh|ss|[sxz])es$/i, "$1");
en.singular(/([^aeiouy])ies$/i, "$1y");

singularize("words") === "word";
singularize("skies") === "sky";
singularize("boxes") === "box";
```
