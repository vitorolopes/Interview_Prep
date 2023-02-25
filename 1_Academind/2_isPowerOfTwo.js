function isPowerOfTwo_1(number){
  if(number <= 1) {
    return false
  }

  while( number % 2 === 0) {
    number = number / 2
    if ( number === 1){
      return true
    }
  }

  return false

}

console.log(isPowerOfTwo_1(4));


function isPowerOfTwo_2 (number){
  if(number < 1) {
      return false
  }
  let dividedNumber = number;
  while (dividedNumber !== 1){
      if (dividedNumber % 2 !== 0) {
          return false
      }

      dividedNumber = dividedNumber / 2;
  }
  return true
}

console.log(isPowerOfTwo_2(8));