// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5

const  multiplesOf3and5 = (n) => { 
  let sum = 0
  for (let i=1; i<n; i++){
    if(i%3===0 || i%5===0){
      sum += i
    }
  }
  return sum
}
 multiplesOf3and5(10)

console.log(multiplesOf3and5(49));