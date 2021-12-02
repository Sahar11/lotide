const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["Yo Yo", "Labs"] of ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(assertArraysEqual(without(words, "Lighthouse"), ["Yo Yo", "lighthouse", "Labs"]));
  });
  it('returns ["hello", "lighthouse"] of ["hello", "loopy", "lighthouse"]', () => {
    const words = ["hello", "loopy", "lighthouse"];
    assert.strictEqual(assertArraysEqual(without(words, "loopy"), ["hello", "loopy", "lighthouse"])); 
  });
  it("returns [2, 3] of [1, 2, 3]", () => {
    const numbers = [1, 2, 3];
    assert.strictEqual(assertArraysEqual(without([1, 2, 3], [1]), [2, 3])); 
  });
});

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "loopy", "lighthouse"];
// assertArraysEqual(without(words, "loopy"), ["hello", "loopy", "lighthouse"]);

module.exports = without;


// let name = "Robert";
// setTimeout(() => console.log(name), 00);
// setTimeout(() => console.log(name, name), 00);
// name = "Bobby";