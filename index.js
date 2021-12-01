const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const without = require('./without');
const findKey = require('./findKey');
const map = require('./map');
const takeUntil = require('./takeUntil');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const countLetters = require('./countLetters');
const findKeyByValue = require('./findKeyByValue');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  findKey,
  map,
  takeUntil,
  assertObjectsEqual,
  eqObjects,
  findKeyByValue,
  countLetters,
  countOnly,
  letterPositions,
  without
}
