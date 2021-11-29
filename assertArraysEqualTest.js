const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns 'Assertion Failed' for different names", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], ["a", 2, 3]));
  });
  it("returns 'Assertion passed' for same numbers", () => {
    assert.strictEqual(assertArraysEqual(["a", "b", "c"], ["a", "b", "c"])); 
  });
});

module.exports = assertArraysEqual;