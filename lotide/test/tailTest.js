const tail = require('../tail.js'); 
const assertEqual = require('../assertEqual.js');
 const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 3 === 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(assertEqual(words.length, 3));
  });
  it("returns 1 === 1", () => {
    const words = [1];
    assert.strictEqual(assertEqual(words.length,1)); 
  });
  it("returns 0 !== undefined", () => {
    const words = [];
    assert.strictEqual(assertEqual(words.length)); 
  });
});
//Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!
// const words1 = [1];
// tail(words1);
// assertEqual(words1.length, 1);

// const words2 = [];
// tail(words2);
// assertEqual(words2.length);

module.exports = tail;