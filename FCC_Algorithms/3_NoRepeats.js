// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

const NoRepeats = (str) => { 

  if(str.length === 1) {return 1}

  const inputArr = str.split("")

  const permutator = (inputArr) => {
        let result = [];

        const permute = (arr, m = []) => {
          if (arr.length === 0) {
            result.push(m)
          } else {
            for (let i = 0; i < arr.length; i++) {
              let curr = arr.slice();
              let next = curr.splice(i, 1);
              permute(curr.slice(), m.concat(next))
          }
        }
      }
      
      permute(inputArr)
      return result;
  }

  const permutations = permutator(inputArr)
  const sizeArrArrs = permutations.length
  const sizeArr = permutations[0].length
  let count = 0
  
  
  for (let i=0; i<sizeArrArrs; i++){
    let add = false

    for (let j=0; j<sizeArr-1; j++){

      if(permutations[i][j] === permutations[i][j+1]){
        add = false //! have to add this here otherwise if the first comparison is false ("baa") the execution gets to add=true
                    //! and if the 2nd comparison does is false ("baa") at the end of the current j loop add is going to  be true 
                    //! and count is going to be incremented but the string has 2 consecutive repeated letters                   
        break
      }
      add = true
    }
    if(add === true) count++  
  }
  return count

//* Alternative solution (simpler)
  // for (let i=0; i<sizeArrArrs; i++){
  //   for (let j=0; j<sizeArr-1; j++){
  //     if(permutations[i][j] === permutations[i][j+1]){
  //      count++ // I am counting the number of permutations which have repeated consecutive letters and then ...
  //       break
  //     }
  //   }
  // }
  // return permutations.length - count // ... I return the number of permutations subtracted by count


}

console.log(NoRepeats("aab"));