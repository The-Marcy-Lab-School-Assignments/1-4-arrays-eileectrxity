//Lesson 1-4 Assignment: Arrays by Eileen

//Question 1: a function that takes 3 args: an array, arr, a value of any type, value, and a boolean, isFront. insert the value as either the first or last value in the arr, depending on the boolean, isFront. function should mutate the array and return nothing
const addToFrontOrBack = (arr, value, isFront ) => {
  if (isFront === false) { //used npm test to figure out if isFront should start with false or true
    arr.push(value); //if the given boolean is false, add the given value to the end of the array
  } else arr.unshift(value); //if the given boolean is true, add the given value to the front of the array
  console.log(arr) //printing the mutated array to the console without using return
};

addToFrontOrBack([1,2,3, 4, 5], 6, true); //[ 6, 1, 2, 3, 4, 5 ]
addToFrontOrBack([1,2,3], 4, false); //[ 1, 2, 3, 4 ]

const reverseString = () => {
};

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
