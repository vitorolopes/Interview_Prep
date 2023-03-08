// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-18-maximum-path-sum-i

function MaximumPathSum(triangle) {
  // Copy the triangle. Note: not needed if we are ok with mutating the input
  let newTriangle = []
  newTriangle = triangle.map(row => [...row])
  const size = triangle.length

 
  for (let r = size-2; r >= 0; r--){ // we want to start on the last but one row. So on the size-2nth row
  //  For testTriangle -> size=4,  last but one row is size-2<=> 4-2=2 -->2nd row 
        for(let c = 0; c <= r; c++ ){ //  we always want to go just untill the column that has an index ...
          // ... equal to the current row (hence c <= r)
        newTriangle[r][c] = newTriangle[r][c] + Math.max(newTriangle[r+1][c], newTriangle[r+1][c+1])
      }
  }
  console.log(newTriangle);
  
  return newTriangle[0][0]
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

console.log(MaximumPathSum(testTriangle));