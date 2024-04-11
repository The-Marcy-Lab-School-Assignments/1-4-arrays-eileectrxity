/* eslint-disable no-param-reassign */

//Question 11: original broken function- supposed to mutate a given array by deleting all the the values inside of it- but it's not working; fix to pass the tests
// const clearArr = (arr) => {
//   array = [];
// };

//debugged
const clearArr = (arr) => {
  arr.splice(0, arr.length); //starting from index 0, effectively mutates and deletes an entire given array by making the delete count the length of the array
};

const getFirstItem = (array) => {
  return array.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
