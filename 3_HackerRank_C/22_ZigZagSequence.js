// https://www.hackerrank.com/challenges/zig-zag-sequence/problem
// NOTE: In this challenge, the task is to debug the existing code to successfully execute all provided test files.
//       There is no JS code to debug

// Note: A list x is lexicographically smaller than a different equal-length list y 
//  if and only if, for the earliest index at which the two lists differ, 
//  x's element at that index is smaller than y's element at that index.

// n, the number of elements of the input array is always odd

const ZigZag = (arr ) => { 
  const k = (arr.length + 1)/2 // the index of the middle element (the one corresponding to maximum value) of the output array
  lexSortedArr = arr.sort() // using sort this way, without parameters the array is lexicographically sorted
  console.log(lexSortedArr);

  let maxOfSortedArr = lexSortedArr[arr.length-1]
  const dec = lexSortedArr.slice(k-1, arr.length-1).reverse()
  const inc = lexSortedArr.splice(0, k-1)

  let result = inc.concat(maxOfSortedArr,dec)

  return result
}

console.log(ZigZag([2,10,3,30,24,7,6,5,12]));
//                  10, 12, 2, 24, 3, 30, 5, 6, 7

// console.log(ZigZag([ 2, 5, 3, 1, 4, 7, 6]));
//                  
//                     2, 5, 3, 1, 4, 7, 6
//                      1,2,3, 7, 6,5,4 <--  THIS IS THE ONE I WANT
//                      1,2,4  7, 6,5,3
//                      1,2,5  7, 6,4,3
//                                 


