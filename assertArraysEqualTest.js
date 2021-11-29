const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], ["a", 2, 3]); // => false
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); //=> true
module.exports = assertArraysEqual;