// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-10-summation-of-primes

function primeSummation(n) {
 
//* Check if this number is prime
  function checkIsPrime(candidateValue) {

    for(let j = 2 ; j <= Math.sqrt(candidateValue) ; j++){ //!  We only need to check up to the square root (SEE Primes.pptx)
      if(candidateValue % j === 0){
        return false
      }
    }
     return true
  }

  let sum = 2 // the 1st prime is 2 

//* Check for all the numbers <'s n which ones are prime
  for(let i = 3 ; i < n ; i = i + 2){ //! all primes are odd (except 2)
    if( checkIsPrime(i) ){
      sum = sum + i
    }
  }

  return sum
}

console.log(primeSummation(2000000));