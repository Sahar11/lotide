const assertEqual = require('./assertEqual.js');

const tail = function(word) {
  let newArr = [];
  newArr = word.slice(1);
  return newArr;
};

module.exports = tail;