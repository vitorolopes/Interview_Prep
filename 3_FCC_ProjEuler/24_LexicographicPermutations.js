// NUMBER OF PERMUTATIONS (no repetition) = n!/(n-r)!, n=number of elements of the array, r=number of elements you choose
// In this particular case we are interested in r=n so the formula becomes ...
// ... NUMBER OF PERMUTATIONS (no repetition) = n!
// The total number of permutations for arr = [0,1,2,3] is 24
// Placing each of this digits in the first position we have 6 permutations for each digit
// So:

// 0th Lexi.Permut = 0 1 2 3       6th Lexi.Permut = 1 0 2 3     12th Lexi.Permut = 2 0 1 3    18th Lexi.Permut = 3 0 2 1
// ...                             ...                           ...                           ...
// 5th Lexi.Permut = 0 3 2 1       11th Lexi.Permut = 1 3 2 0    17th Lexi.Permut = 2 0 3 1    23rd Lexi.Permut = 3 2 1 0

// We want the 20th permutation. We know that the 20th permutation is in the 20/NUMBER_OF_PERMUTATIONS = 20/6 = 3,333 "group" (the 3rd group) of 6 permutations
// So the first digit of the 20th permutation is going to be ...
//!    ... 3
// Now we can remove this element of arr, getting arr = [0,1,2]
// The remainder of 20/6 is 2

// The total number of permutations for arr = [0,1,2] is 6
// Placing each of this digits in the first position we have 2 permutations for each digit
// So:

// 0th Lexi.Permut = 0 1 2        2nd Lexi.Permut = 1 0 2      4th Lexi.Permut = 2 0 1    
// 1st Lexi.Permut = 0 2 1        3rd Lexi.Permut = 1 2 0      5th Lexi.Permut = 2 1 0   

// Now we want the 2nd one of this 6 permutations(The remainder of 20/6 is 2). We know that the 2nd permutation is in the 2/NUMBER_OF_PERMUTATIONS = 2/2 = 1 "group" (the 1st group) of 2 permutations
// So the second digit of the 20th permutation is going to be ...
//!    ... 1
// Now we can remove this element of arr, getting arr = [0,2]
// The remainder of 2/2 is 0


// The total number of permutations for arr = [0,2] is 2
// Placing each of this digits in the first position we have 1 permutations for each digit
// So:

// 0th Lexi.Permut = 0  2    1st Lexi.Permut = 2 0 

// Now we want the 0th one of this 2 permutations(The remainder of 2/2 is 0). We know that the 0th permutation is in the 0/1= 0 = 0 "group" (the 0th group) of 1 permutations
// So the second digit of the 20th permutation is going to be ...
//!    ... 0

// ...
// ...
//!    ... 2

const LexicographicPermutations = (n) => { 
  
 const arr = [0,1,2,3] // easier to understand with this smaller array
 // const arr = [0,1,2,3,4,5,6,7,8,9]

 // Construct an array containg the number of permutations for arrays with length arr.length-1, arr.length-2, ..., 0.
  let numberOfPermutsArr = []
  function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
  }
  for(let i=3; i >= 0; i--){  
    numberOfPermutsArr.push(fact(i))
  }
  console.log(numberOfPermutsArr);

  let permutation = "";
  for (let i = 0; i < 4; i++) {  
    console.log("i: ", i);
    console.log("n: ", n);
    console.log("digits: ", arr);
    console.log("n / numberOfPermutsArr[i]: ", n / numberOfPermutsArr[i]); // i = 0; n = 20; numberOfPermutsArr[0] = 6                       -----  i = 1; n = 2; numberOfPermutsArr[0] = 2
    permutation += arr.splice(Math.floor(n / numberOfPermutsArr[i]), 1);   // arr.splice(Math.floor(20/6)) = arr.splice(3) => arr = [0,1,2]  -----  arr.splice(Math.floor(2/2)) = arr.splice(1) => arr = [0,2]
    console.log("permutation: ", permutation);
    n = n % numberOfPermutsArr[i];                                         // n = 2                                                          -----  n = 0
    console.log("n after: ",  n );
  }
  return Number(permutation); // In FCC they ask for a number but what if we want a permutation that starts with 0, 
                              // the 3rd permutation, for instance? The 3rd permutation is 0 2 3 1
                              // but the function is going to return 231


}

console.log(LexicographicPermutations(3));
// console.log(LexicographicPermutations(999999));