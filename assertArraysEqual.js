const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
if (arr1.length !== arr2.length) return false;
for(let i = 0; i <= arr1.length; i++ ) {
  if(arr1[i] !== arr2[i]){
    return false;
  }
}
return true;
}

const assertArraysEqual = function (arr1, arr2){
  console.log(arr2);
if (arr1.length !== arr2.length) return false;
for(let i = 0; i <= arr1.length; i++ ) {
  if(arr1[i] !== arr2[i]){
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
    return false;
  }
}
console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
return true;
};



assertArraysEqual([1, 2, 3], ["a", 2, 3]); // => true

