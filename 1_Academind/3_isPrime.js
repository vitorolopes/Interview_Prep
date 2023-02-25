const isPrime_1 = (number) => { 
 for (let i = 2; i < number; i++){
  if(number % i === 0){
    return false
  }
 }
 return true
}

console.log(isPrime_1(4));


const isPrime_2 = (n) => { 
  for (let i = 2; i < n; i++){
      if(Number.isInteger(n/i)){
          console.log(`${n} is not prime`)
          return
      }
  }
  console.log(`${n} is prime`);
}

isPrime_2(4)