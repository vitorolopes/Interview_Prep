// https://www.hackerrank.com/challenges/camelcase/problem

const camelCase = (str) => { 
  n_of_upperCaseLetters = 0
  for (let letter of str){
    if(letter.toLowerCase() === letter){
      continue
    } else {
      n_of_upperCaseLetters++
    }
  }
  return n_of_upperCaseLetters + 1

}

console.log(camelCase("saveChangesInTheEditor"));