// https://www.hackerrank.com/challenges/counting-valleys/problem

const CountingValleys = (str) => { 
    let valleys = 0;
    let distToSL = 0
    for(let letter of str){
      if(letter === "U"){
        distToSL++
      }else{
        distToSL--
      }
      if(distToSL===0 && letter==="U"){
        valleys++
      }
    }
    return valleys 
}

const string = "UDDDUDUU"

console.log(CountingValleys(string));