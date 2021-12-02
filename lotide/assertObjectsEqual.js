const assertEqual = require('./assertEqual');
const eqArrays= require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obKey1 = Object.keys(object1)
  const obKey2 = Object.keys(object2)
  if (obKey1.length !== obKey2.length) {
    return false;
  }
  for (const key of obKey1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;//import libraries 
  let message;
  eqObjects(actual,expected)? message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : message = `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(message);
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b:  "2", c: "3"};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);

module.exports = assertObjectsEqual;