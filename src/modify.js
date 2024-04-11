//improve this static function that takes 3 words, upper cases them, and then returns them in an array. only works with 3 parameters right now; read the docs for the rest operator to improve this function. remember, we will never pass in an array as an argument, only individual word arguments
// original function
// const uppercaseAll = (word1, word2, word3) => {
//   return [
//     word1.toUpperCase(),
//     word2.toUpperCase(),
//     word3.toUpperCase(),
//   ];
// };

//using .map() and rest operator to capitalize each element string inside a given array of words 
const uppercaseAll = (...word) => { //represent an infinite number of arguments that JS will collect as an array so we can use the .map() method
  return word.map(strEl => strEl.toUpperCase()) //return a new array with the capitalized versions of all the passed elements in the given array, word
}

// //alt solution a: using a for loop to push the capitalized words into a new array and return that array
// const uppercaseAll = (...word) => {
//   let ucWords = []; //initalizing a new array to store the uppercased words in later
//   for (i = 0; i < word.length; i++) { //iterating through each character in a given string, word
//     ucWords.push(word[i].toUpperCase()) //pushing the current uppercased word to the end of our new array, ucWords
//     // ucWords += word[i].toUpperCase() + ' '; //CANT DO THIS; JS will treat ucWords as a string rather than an array because of how concatenation works. this line would have concatenating the uppercased version of the current string in the iteration to the ucWords string (added a space between each word)
//   }
//   // return ucWords.trim().split(' '); //IF HAD TO USE CONCATENATION: use to trim extra space and split into an array
//   return ucWords; //returning the final array of given words as uppercased string elements
// };

console.log(uppercaseAll('hi', 'there'))

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
