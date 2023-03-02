// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-6-sum-square-difference

function sumSquareDifference(n){
  
  let sumOfSquares = 0
  let squareOfSum = 0

  for(let i = 1; i<=n; i++){
    sumOfSquares += i**2
    squareOfSum += i
  }

  squareOfSum = squareOfSum**2

  console.log(sumOfSquares);
  console.log(squareOfSum);

  return squareOfSum - sumOfSquares
}

console.log(sumSquareDifference(100))