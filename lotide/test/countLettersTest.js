const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('countLetters()', () => {
  it('return {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1} when input is "abcdefg"', () => {
    assert.deepEqual(countLetters('abcdefg'), {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1});
  });
  it('return {l: 2, i: 2, g: 2} when input is "ligilg', () => {
    assert.deepEqual(countLetters('ligilg'), {l: 2, i: 2, g: 2});
  });
  it('return undefined when input contains nothing', () => {
    assert.isUndefined(countLetters());
  });
  it('return {k: 2} when input is "k k h"', () => {
    assert.deepEqual(countLetters("k k h"), {k: 2, h: 1});
  });
  it('return undefined when input is ""', () => {
    assert.isUndefined(countLetters(''));
  });
});