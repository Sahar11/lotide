//const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
 const obKey1 = Object.keys(object1);
 //console.log(obKey1);
 const obkey2 = Object.keys(object2);
  if(obKey1.length !== obkey2.length) {
    return false;
  }
  if (typeof(object1) !== 'object' || typeof(object2) !== 'object') {
    return false;
  }
  for (let index in object1) { //loops through object1

    //if object1[index] is an array, use eqArray()
    if (Array.isArray(object1[index])) {
      if (!eqArrays(object1[index], object2[index])) return false;
      
    //if object1[index] is another object, use recursion
    } else if (typeof object1[index] === 'object') {
      if (!eqObjects(object1[index], object2[index])) return false;


    //if object1[index] is not an array, use ===
    } else if (object1[index] !== object2[index]) return false;
    
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
module.exports = eqObjects;