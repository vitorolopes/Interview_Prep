// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-13-large-sum

function LargeSum(stringsArr) {
  const numsArr = stringsArr.map(num => +num)
  let sum = numsArr.reduce ((acc, cur) => acc + cur, 0)
  let tempStr = sum.toString().split("e")
  tempStr = tempStr[0]
  console.log(tempStr, "", typeof tempStr);
  const result = tempStr.slice(0,11) * 10**9 //! js implicit (string to number) coercion
  // SEE notes below
  // https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
  console.log(typeof result);
  return result
}


const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(LargeSum(testNums));

//! NOTES
// let five = "5"
// let six = "6"
// let prod = five * six
// let soma = five + six
// console.log(prod, typeof prod);  30 number
// console.log(soma, typeof soma);  56 string

// Implicit conversion is tricky, because it’s triggered in more cases:
// comparison operators (>, <, <=,>=)
// bitwise operators ( | & ^ ~)
// arithmetic operators (- + * / % ). 
      // Note, that binary + does not trigger numeric conversion,
      // (SEE note below) when any operand is a string.
// unary + operator
// loose equality operator == (incl. !=).
    // Note that == does not trigger numeric conversion when both operands are strings.

// Note: In contrast to unary operators, which require 
// just one operand to perform its operation, 
//* binary operators require two operands