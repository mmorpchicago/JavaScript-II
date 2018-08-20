const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//MAIN ARRAY CALLBACK
function arrayItems(arr, type){
  switch (type){
    case "first":
      return arr[0];
      break;
    case "last":
      return arr[arr.length - 1];
      break;
    case "length":
      return arr.length;
      break;
  }
}

//REDUNDANT
function checkFirst(arr){
  return arr[0];
}

function arrayLength(arr){
  return arr.length - 1;
}

//CHALLENGE
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr, "first");
}

firstItem(items, arrayItems);



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr, "length");
}


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr, "last");
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
