// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-16-power-digit-sum

function PowerDigitSum(exponent) {
  const number = BigInt(2**exponent)
  console.log(number); //! notice the "n" at the end of the "number"
  const string = number.toString() // transform the number into a string
  console.log(string); //! notice that the "n" disappears
  const digitsStringsArr = string.split("") // transform the string into an array of strings
  console.log(digitsStringsArr);
  const digitsArr = digitsStringsArr.map(digitString => Number(digitString))
  const sum = digitsArr.reduce((acc,cur) => { 
                          return acc + cur
                        },0)
  return sum
}

console.log(PowerDigitSum(15));