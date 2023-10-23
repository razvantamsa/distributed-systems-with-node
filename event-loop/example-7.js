const { assert } = require("console");

let bar = false;
foo(3, () => {
    assert(bar);
});
bar = true;