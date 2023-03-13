// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const SubArrayDivision = (arr, day, month) => { 

  let count = 0

  for(let i=0; i<=arr.length-month; i++){
    let segment = []
    segment = arr.slice(i,i+month)
    if( segment.reduce((acc,curr) => { return acc + curr }, 0) === day ) count ++
  }

  return count
}

const arr = [1,2,1,3,2]
const day = 3
const month = 2
console.log(SubArrayDivision(arr, day, month));