// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

// Output: An array with the numbers of times she broke her records. 
// Index 0 is for breaking most points records, and index 1 is for breaking least points records.

const Breaking_The_Records = (arr) => { 
 let mostPoints_N_TimesBeaten = 0
 let leastPoints_N_TimesBeaten = 0
 let mostPoints = arr[0]
 let leastPoints = arr[0]

 for (let i = 1; i < arr.length; i++){
  if( arr[i] > mostPoints ) {
    mostPoints = arr[i]
    mostPoints_N_TimesBeaten++
  }
  if( arr[i] < leastPoints) {
    leastPoints = arr[i]
    leastPoints_N_TimesBeaten++
  }
 }
  return [mostPoints_N_TimesBeaten, leastPoints_N_TimesBeaten]
}

const arr = [10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log(Breaking_The_Records(arr));