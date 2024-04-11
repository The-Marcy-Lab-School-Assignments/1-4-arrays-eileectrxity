// //Lesson 1-4 Assignment: Arrays by Eileen

//Question 1: SIDE EFFECTS- a function that takes 3 args: an array, arr, a value of any type, value, and a boolean, isFront. insert the value as either the first or last value in the arr, depending on the boolean, isFront. function should mutate the array and return nothing

//using the .push() and .unshift() method to check if the boolean is true or false and pushing to the front or back accordingly
const addToFrontOrBack = (arr, value, isFront ) => {
  if (isFront === false) { //used npm test to figure out if isFront should start with false or true
    arr.push(value); //if the given boolean is false, add the given value to the end of the array
  } else arr.unshift(value); //if the given boolean is true, add the given value to the front of the array
  // return arr; //to help me see what's happening: returning the actual mutated array
};

console.log(addToFrontOrBack([1,2,3, 4, 5], 6, true)); //[ 6, 1, 2, 3, 4, 5 ]
console.log(addToFrontOrBack([1,2,3], 4, false)); //[ 1, 2, 3, 4 ]

//Question 2: PURE- a function that takes a string argument; function should return a reversed version of the string. will this function modify the original string in anyway? food for thought

//using array methods join() and reverse() with a for loop with function not modifying the original string but returning a new string
const reverseString = (str) => {
  let reverseArr = []; //initializing an empty array to be able to use the .push() and .reverse() method later
  for (let i = 0; i < str.length; i++) { //iterating through each index of a given string until the end of the string
    reverseArr.push(str[i]); //taking the character at current index, i, in the iteration and pushing it to the end of new array, reverseArr
  }
  return reverseArr.reverse().join(''); //reversing the new array and converting the reversed array to a string with .join('') where the '' removes the commas so instead of getting o,l,l,e,h we get olleh
};

// //alt solution a: using a for loop and manually adding a given string to a new string from end to beginning to get the reversed string
// const reverseString = (str) => {
//   let reverseStr = ''; //initializing an empty string to store the reveresed string in later
//   for (let i = str.length-1; i >= 0; i--) { //iterating backwards through each element in a given string; starting loop at the end of a string/last index until current position, i, is greater than or equal to 0
//     reverseStr += str[i]; //adding the character itself at the current position in the iteration to the new string
//   }
//   return reverseStr;
// };

console.log(reverseString('hello')); // 'olleh'

const newArrayFullOf = () => {
};

const insertIntoMiddle = () => {
};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
