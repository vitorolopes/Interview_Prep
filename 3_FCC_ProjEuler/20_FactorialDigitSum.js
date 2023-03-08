
function FactorialDigitSum(n) {
 
  const factorial= (n) => { 
      result = n
      for(let i = n-1; i > 1; i--){
        result = BigInt(result) * BigInt(i)
      }
      return result
  }

  let string = factorial(n).toString()
  console.log(string);
  const stringsArr = string.split("")
  const numbersArr = stringsArr.map(string => Number(string))
  console.log(numbersArr);
  const sumOfDigits = numbersArr.reduce((acc,curr)=>{
    return acc + curr
  },0)
  return sumOfDigits
}

console.log(FactorialDigitSum(100));