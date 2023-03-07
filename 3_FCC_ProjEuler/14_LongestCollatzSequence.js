// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-14-longest-collatz-sequence

// LongestCollatzSequence(14)  should return 9.
// From all the sequences starting from 13 untill 1
// the sequence that starts with 9 is the one that 
// produces the longest chain.

function LongestCollatzSequence(n) {

  let countMax = 1  
  let nLongest = 1

  for(let i=n-1; i > 1; i--){
    let count = 1
    let number = i

    while (number > 1){
        if(number%2===0){
          number=number/2
          count++
        } else{
          number=3*number+1
          count++
        }
    }

    if(count > countMax){
      countMax = count
      nLongest = i
    }

  }

  return nLongest
  
}

console.log(LongestCollatzSequence(100000));


