// https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem

const PermutingTwoArrays = (k, A, B) => { 

  const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
   
   permute(inputArr)
   return result;
  }
    
  const calcSums = (k,A,B) => {  
      let sumArr = []
        for(let j=0; j<B.length; j++){
          sumArr.push(A[j]+B[j])
          console.log(sumArr);
        }

        if( sumArr.every(sum => sum >= k) ){
          return true
        } else {
          return false
        }
  }

  const allPermutsOfB = permutator(B)

  for(let permutation of allPermutsOfB){
    if(calcSums(k,A,B)){
      return "YES"
    }
  }
  return "NO"
}

const A = [2, 1, 3]
const B = [8, 9, 7]

// const A = [1, 2, 2, 1];
// const B = [3, 3, 3, 4];

console.log(PermutingTwoArrays(10, A, B));
// console.log(PermutingTwoArrays(5, A,B));

//* -------------------------------------------------
