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

//Question 3: PURE- a function that takes 2 args: a value of any type value and a number numOfValue. function should return a new array full of the value

//using new Array and .fill() method to create a new array with a given number of empty elements, and filling in all those empty elements with a given value
const newArrayFullOf = (val, numOfValue) => {
  return new Array(numOfValue).fill(val); //first making a new array with numOfValue empty elements, and filling it with a given val
};

// //alt solution a: using a for loop and pushing val to a new array a given num times
// const newArrayFullOf = (val, numOfValue) => {
//   let newArr = []; //initializing a new array to return later
//   for (let i = 0; i < numOfValue; i++) { //looping and iterating a given number of times
//     newArr.push(val); //adding val to the end of the new array with each iteration for a total of num times
//   }
//   return newArr; //returning the new array with all values added
// };

const testArr1 = newArrayFullOf(1, 5);
console.log(testArr1); //[1, 1, 1, 1, 1]

const testArr2 = newArrayFullOf(true, 2);
console.log(testArr2); //[true, true]

//Question 4: SIDE EFFECT- a function that takes 2 args: an array, arr and a value of any type, value. function should find the middle index of the array and then insert the value there. the function is mutational so it returns nothing. check the tests to see exactly which index should be the "middle." don't overthink it!

//using .splice() and Math.floor method
const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2); //getting the middle index of a given array by halving the array length and rounding it down to get the left most middle index if the array length is even
  arr.splice(middle, 0, value); //at the middle index, deletes 0 elements and adds the given value before/to the left of the middle index
  // console.log(arr.splice(median, 0, value)) //to help me see what's happening: returns the array of the deleted elements
  // return arr; //to help me see what's happening: returns the actual mutated array
};

const testArr3 = [1, 2, 3, 4, 5, 6];
console.log(insertIntoMiddle(testArr3, 7)); //[1, 2, 3, 7, 4, 5, 6]);
const testArr4 = [1, 2, 3];
console.log(insertIntoMiddle(testArr4, 0)); //[1, 0, 2, 3]

//Question 5: SIDE EFFECT- a function that takes an array, arr. function should delete whatever value is in the middle index of the array. function is mutational so it returns nothing. check the tests to see exactly which index should be the "middle." don't overthink it!

//using splice() method; nearly identical to the insertIntoMiddle function just before this. deletes an element from a given array at the middle index
const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2); //get the middle and round it down so that we get the left most middle index
  arr.splice(middle, 1); //deletes 1 element from the middle index
  // console.log(arr.splice(median, 0, value)) //to help me see what's happening: returns the array of the deleted elements
  // return arr; //to help me see what's happening: returns the actual mutated array
};

const testArr5 = [1, 2, 3, 4, 5];
console.log(deleteFromMiddle(testArr5)); //[1, 2, 4, 5]);
const testArr6 = [1, 2, 3];
console.log(deleteFromMiddle(testArr6)); //[1, 3]

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
