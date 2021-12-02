const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns 'Assertion Failed' for different names", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("returns 'Assertion passed' for same numbers", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
  it("returns 'Assertion passed' for Light", () => {
    assert.strictEqual(assertEqual("Light", "Light")); 
  });
  it("returns 'Assertion Failed' for different numbers", () => {
    assert.strictEqual(assertEqual(1,2)); 
  });
});

module.exports = assertEqual;