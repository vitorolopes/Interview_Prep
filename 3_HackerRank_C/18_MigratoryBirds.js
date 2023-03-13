// https://www.hackerrank.com/challenges/migratory-birds/problem

const MigratoryBirds = (arr) => { 
    
  const types = []
  for(let j=1; j<=5;j++){types.push(j)} // It is guaranteed that each type is 1, 2 ,3 , 4 , or 5 .

  let freqArr = new Array(5+1).fill(0) // 5+1 because otherwise the last element of freqArr would be NaN

  for (let i = 0; i < arr.length; i++){
    if(types.includes(arr[i])) freqArr[arr[i]]++
  }
  console.log(freqArr);
  return freqArr.indexOf(Math.max(...freqArr)) // The indexOf() method returns the first index (position) of a specified value.
}

const arr = [1,4,4,4,5,3]

console.log(MigratoryBirds(arr));