/* eslint-disable no-param-reassign */

//Question 11: original broken function- supposed to mutate a given array by deleting all the the values inside of it- but it's not working; fix to pass the tests
// const clearArr = (arr) => {
//   array = [];
// };

//debugged
const clearArr = (arr) => {
  arr.splice(0, arr.length); //starting from index 0, effectively mutates and deletes an entire given array by making the delete count the length of the array
};

console.log(clearArr([1, 2, 3])) // undefined

//Question 12: original broken function- not supposed to mutate the given array; just want the first item of the array. fix to pass the tests
// const getFirstItem = (array) => {
//   return array.shift(); //.shift() mutates an array so doesn't work
// };

//debugged
const getFirstItem = (array) => {
    return array[0]; //more simple than the below, accesses the first element (at index 0) of a given array without mutating anything
  // return array.slice(0, 1); //gets an array copy of the first element in a given array
};

console.log(getFirstItem([9, 2, 3])) // 9

module.exports = {
  clearArr,
  getFirstItem,
};
