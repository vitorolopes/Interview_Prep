// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-5-smallest-multiple

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function smallestMult(n){

  const max = factorial(n) // max is divisible by all the numbers from 1 to n  
  
  for(let i=n; i<=max; i++){

    let count = 0
    
    for(let k=1; k<=n; k++){
      // console.log(i,k);

      if(i%k!==0){
        break
      }else{
        count++
      }

      if(count === n){
        return i
      }

    }
    
  }
  return max
}

console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(13));
console.log(smallestMult(20));