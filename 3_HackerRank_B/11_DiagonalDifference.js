// https://www.hackerrank.com/challenges/diagonal-difference/problem

const DiagonalDifference = (arr) => { 
  const size = arr.length
  let LeftToRight = 0;
  let RightToLeft = 0;

  for(let r=0; r<size; r++){
    for(let c=0; c<size; c++){
      
      if( r === c ) LeftToRight += arr[r][c]

      if( r + c === size - 1 ) RightToLeft += arr[r][c]

    }
  }

  console.log(LeftToRight);
  console.log(RightToLeft);
  return Math.abs(LeftToRight-RightToLeft)
 }

const squareMatrix = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
]

console.log(DiagonalDifference(squareMatrix));