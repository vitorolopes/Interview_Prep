// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-23-non-abundant-sums


const NonAbundantSum = (n) => { 

  const findDivisors = (number) => {

    const sqrt = Math.sqrt(number)
    let divisors = [1]
   // for (let j=1; j<number; j++){  
    for (let j=2; j<sqrt; j++){  //! Without this improvement was working for all test cases but 
                                 //! in FCC platform was giving a TimeOut error for some of the cases
                                 //! Now is working fine!
      if(number % j === 0){
        divisors.push(j, number/j)
      }
    }
    if(number % sqrt === 0){
      divisors.push(sqrt)
    }
    // console.log(number, divisors);
    return divisors
  }

  const abunds = []
  const findAbunds = (n) => { 
    for (let i=2; i<=n; i++){
     const sumOfDivisors = findDivisors(i).reduce((acc,cur)=> { return acc + cur}, 0)
     // console.log("sumOfDivisors: ",sumOfDivisors);
     if(sumOfDivisors > i){
      abunds.push(i)
     }
    }
  }

  findAbunds(n) // Find all abunds below the number which cannot be written as the sum of 2 abunds
  console.log(abunds);

 
//  for the abunds arr calc the sum of all possible pairs          
  let sumOfPairsOfAbundsArr = [].concat(...abunds.map( 
    (v, i) => abunds.slice(i).map( w => v + w )
  ));
  sumOfPairsOfAbundsArr = [...new Set(sumOfPairsOfAbundsArr)] // remove duplicates
  // console.log(sumOfPairsOfAbundsArr);

//  for k=1 --> n find if !sumOfPossiblePairsArr.includes(k)  ... if true add k to sum
  let sum = 0
  for(let k=0; k<=n; k++){
    if(!sumOfPairsOfAbundsArr.includes(k)){
      sum += k
    }
  }
  return sum
}

console.log(NonAbundantSum(10000));