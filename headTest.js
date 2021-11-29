
const head = require('../head.js'); 
const assertEqual = require('../assertEqual.js');
//Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([1,2,3]), 4);

module.exports = head;