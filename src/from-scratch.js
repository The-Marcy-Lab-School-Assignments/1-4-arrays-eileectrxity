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

//Question 6: PURE- a function that takes 3 args: an array, arr, a primitive type value, and a number, index. the function returns a boolean, true if the given value is at the index in the arr, and false otherwise. that includes false for values that aren't even in the array

//using index0f() method with a for loop to return a boolean if a given array includes a given primitive value at a given index (within the array)
const isRightIndex = (arr, value, index) => {
  for (i = 0; i < arr.length; i++) { //iterates through each element in a given array until the end of the array
    if (arr.indexOf(value) === index) { //assuming the value given is within the array given, checks if the index of that value is the same as the given index
      return true; //returns the boolean true if value index and given index are the same
    } else return false; //returns false otherwise
  };
};

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(isRightIndex(arr, 'a', 0)); //true
console.log(isRightIndex(arr, 'a', 1)); //false
console.log(isRightIndex(arr, 'WOW', 1)); //false
console.log(isRightIndex(arr, 'A', 1)); //false

//Question 7: PURE- a function that takes an array of numbers, arr. function should return a new array full of arrs numbers rounded down. original arr numbers should not be modified in any way

//using map() method to create a new array with each element rounded down
const roundAllNumsDown = (arr) => {
  const newArr = arr.map(Math.floor); //map() intentionally iterates through each element, passing each element in arr to the argument inside it (argument being Math.floor in this case) --> so no need to specify by coding Math.floor(arr[i])
  return newArr;
};

// //alt solution a: using a for loop to manually round down each number in a given array and add it to a new array
// const roundAllNumsDown = (arr) => {
//   let newArr = []; //initializing an empty array to store rounded values in later
//   for (let i = 0; i < arr.length; i++) { //iterating through each value in a given array
//     const number = Math.floor(arr[i]); //rounding down the value at current index i (Math.floor has to be stored inside a variable to work)
//     newArr.push(number); //pushing that rounded down value to the end of the new array with each iteration
//   };
//   return newArr; //getting the new array with all values rounded down
// };

const testArr7 = [1.1, 2.2, 3.3];
console.log(roundAllNumsDown(testArr7)); //[1, 2, 3]
const testArr8 = [5.9, -7.9, 12.9];
console.log(roundAllNumsDown(testArr8)); //[5, -8, 12]

/*Question 8: PURE- a function that takes an array of coordinate pairs, arrOfCoords. function should return a new array full of only the y coordinates (that is the second value in the coordinate arrays). like this:
// [x, y]
getAllYCoordinates([[1, 2], [3, 4], [5, 6]])
// [2, 4, 6]

// [x, y, z]
getAllYCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// [2, 5, 8]
*/

//using .map() method to return a new array of just the elements at index 1 of each nested array from the given array
const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(yCoords => yCoords[1]) //for each nested array aka element pair of arrOfCoords, get the y coordinate at element 1 of each pair
};

// //alt solution a: using a nested for loop and .push() method to return a new array, storing the manually added elements at index 1 of each nested array
// const getAllYCoordinates = (arrOfCoords) => {
//   let yCords = []; //initializing an empty array to push y coordinates to
//   for (let i = 0; i < arrOfCoords.length; i++) { //iterating through all array pair elements 
//     for (let j = 0; j < arrOfCoords[j].length; j++) { //iterating inside each nested array's element (where arrofCoords[j].length is the length of a single nested array)
//       if (j === 1) { //if the nested array's element index is 1
//         yCords.push(arrOfCoords[i][j]); //push element at [i][1] to the new array (where [i][j] references an element inside of the nested array)
//       };
//     };
//   }
//     return yCords; //an array of all the y coordinates (each nested array's element at index 1)
// };

console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]])); //[2, 4, 6]
console.log(getAllYCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [2, 5, 8]

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
