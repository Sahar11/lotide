const assertEqual = require('./assertEqual');
const countOnly = function(allItems, itemsToCount) {
  const results = {};
   // inside the loop, 
// increment the counter for each item:
//   set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.
//Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
  for (const item of allItems) {
    if(itemsToCount[item]){
    if (results[item]) {
      results[item] += 1;
     } else {
       results[item] = 1;
     }
    
    }
    //console.log(item);
  }

  if (Object.keys(results).length === 0) return undefined;
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });



module.exports = countOnly;