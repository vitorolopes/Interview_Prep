const factorial_a = (n) => { 
  result = n
  for(let i = n-1; i > 1; i--){
    result = result * i
  }
  return result
}
console.log(factorial_a(5));

function factorial_b(number){
  let result = 1;
  for ( let i = 2; i <= number; i++) {    
      result = result * i
  }
  return result
}

console.log(factorial_b(5))


const factorial_recursive_a = (n) => { 
  
  if( n === 1 ){
    return 1
  }

  return n * factorial_recursive_a(n-1)

}

console.log(factorial_recursive_a(5));


function factorial_recursive_b(n) {
  return n <= 1 ? 1 : n * factorial_recursive_b(n - 1);
}

console.log(factorial_recursive_b(5))

