// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-21-amicable-numbers

// d(n) = sum of proper divisors of n
// If d(a) = b && d(b) = a, a!==b => a && b are amicable numbers
// d(220) = 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
// d(284) =  1  + 2 + 4 + 71 + 142 = 220




const AmicableNumbers = (n) => { 

  const properDivSum = (number) => { 
    let sum = 1;
    for(let k=2; k<number; k++){
      if( number % k === 0){
        sum = sum + k
      } 
    }
    console.log(number, sum);
    return sum
  }
// Find the sum of the proper divisors of numbers under n

  for(let i = 1; i < n; i++){
    arrOfSums[i] = properDivSum(i)
  }

// TODO: Find the pairs of amicable numbers
  
}

console.log(AmicableNumbers(10));