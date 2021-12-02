//const assertEqual = require('./assertEqual');

const countLetters = function(str) {
    
  if (!str) { return undefined; }
   const result = {}
   for(let letter of str) {
     if(letter === ' ') { continue; }// to skip spaces
     if(result[letter]){
       result[letter] +=1 ;
     } else {
       result[letter] = 1;
     }
      
   }
   return result;
}

console.log(countLetters("lighthouse in the house"));



module.exports = countLetters;