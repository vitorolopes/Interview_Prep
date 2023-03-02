// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime


/* Solution Function */
let nthPrime = (n) => {
  /* Latest found Prime */
  let latestPrime = 2 // We know 2 is a prime number
  /* Number of Terms generated */
  let count = 1
  /* First Candidate Value */
  let candidateValue = 3

  while(count < n){

      /* Assume Prime until Proven Otherwise*/
      let isPrime = true

      /* Divide Candidate Value by all numbers between
          2 and itself. If divides without remainder,
           then not prime, so break */
      let i
      
      for(i = 2; i < candidateValue ; i++){
          if(candidateValue % i === 0){
              isPrime = false
              break
          }
      }

      /* If still prime, set the last prime 
          and update count */
      if(isPrime){
          latestPrime = candidateValue
          count = count + 1
      }

      /* We know 2 and 3 are primes and that all the other primes are odd */
      candidateValue = candidateValue + 2
  }
  /* Return the last found prime, since we 
      have generated enough */
  return latestPrime
}

/* Check Solution */
console.log('Result is ' + nthPrime(100))