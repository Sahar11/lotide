const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
/*
1) array with 1 /2 element has no middle
2) array with odd number has 1 middle
3) array with even number has 2 middle (approach: array[midindex-1] array[midindex])
*/

const midIndex = function(array) {
 return Math.floor(array.length/2);
}

const middle = function(array) {
  let newArr = [];
 if (array <= 2) {
   return newArr;
 } else if(array.length % 2 !== 0) {
   newArr.push(array[midIndex(array)]);
 } 
 newArr.push(array[midIndex(array)-1]);
     newArr.push(array[midIndex(array)]);
return newArr;
};

// assertArraysEqual(middle([1,2,3]), [2]);
//  assertArraysEqual(middle([1,2,3,4]), [2,3]);
//  assertArraysEqual(middle([1,2,3,4,5]), [3]);
//  assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
// assertArraysEqual(middle([1,2]), []);

module.exports = middle;