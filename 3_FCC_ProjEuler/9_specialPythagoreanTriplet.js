// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet

// natural numbers -> 0,1,2,...
// a**2 + b**2 = c**2
// a < b < c
// a + b + c = n
// n = 24 => a*b*c= 480

function specialPythagoreanTriplet(n) {

  let productABC = []

  for(let a=1; a<n; a++){
    for(let b=a; b<n; b++){
      let c = Math.sqrt(a**2 + b**2)
      if(a + b + c === n){
        productABC.push(a*b*c) // as there are more than one solution (for example in the case where n=120)
        // I store all the solution in productABC
        product = [...new Set(productABC)] // in case some of the solutions is repeated
      }
    }
  }

  return product[0] // as the problem state that the function should return a number I return the 1st item of the solution array
}


console.log(specialPythagoreanTriplet(24));