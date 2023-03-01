// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor

// https://www.cuemath.com/numbers/prime-factorization/

// To find the largest prime factor of a number, 
// we start from the smallest prime factor 2 and divide the number with it.
// If the remainder is 0 that means the number is divisible by that factor,
// we keep dividing the number by that factor until that number is no more
// divisible by it.
// After that, we incrememnt the factor by 1 and 
// repeat this process till the number becomes 1.

function largestPrimeFactor(number){
  let factor = 2,
  max = 1;

  while (factor <= number) {
                                  console.log("number: ",number);
                                  console.log("factor: ",factor);
                                  console.log("--");
    if (number % factor == 0) {

      max = factor;               console.log("max: ", max);
      number = number / factor;   console.log("number: ", number);
                                  console.log("--");
    } else {//Only increment the factor if the number isn't divisible by it
      factor++
                                  console.log("factor: ", factor);
                                  console.log("--");
    }; 
  }
  return max;
}

console.log(largestPrimeFactor(60));

// let primeFactors = [2]
// console.log(largestPrimeFactor(7));
// console.log(largestPrimeFactor(2));
// console.log(largestPrimeFactor(3));
// console.log(largestPrimeFactor(5));
// console.log(largestPrimeFactor(7));
// console.log(largestPrimeFactor(8));




