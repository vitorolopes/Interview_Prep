// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

// You may use pairs that have the same numeric value but those numeric values must have different indices. 
// Each pair should use the lowest possible available indices. 
// Once an element has been used it cannot be reused to pair with another element. 
 
const PairWise = (arr, arg) => { 

  let usedIndexes = []
  for(let i=0; i<arr.length-1; i++){
    for( let j=i+1; j<arr.length; j++){
      if ( arr[i] + arr[j] === arg 
           && !usedIndexes.includes(i) 
           && !usedIndexes.includes(j)  ){ // We can't use repeated indexes
            usedIndexes.push(i, j)
            break // if we have found a match for the current "i" we need to search no more
      }
    }
  }
  return usedIndexes.reduce((acc, curr) => acc + curr, 0);
}



console.log(PairWise([0,  0,  0,  0,  1,  1], 1));
//                    P1  P2          P1  P2
//                    0   1           4   5
// Pair one, P1 = 0 + 4 = 4
// Pair two, P2 = 1 + 5 = 6
//   So the total sum is 10