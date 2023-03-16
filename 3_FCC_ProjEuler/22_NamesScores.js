// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-22-names-scores

const NamesScores = (arrStrs) => { 
  arrStrs.sort()
  
  const sumName = (str) => { 
    console.log(str);
    const posAndLetts = [
      1,    "A",
      2,  	"B",
      3,  	"C",
      4,  	"D",
      5,  	"E",
      6,  	"F",
      7,  	"G",
      8,  	"H",
      9,  	"I",
      10 , 	"J",
      11,  	"K",
      12,   "L",
      13,  	"M",
      14,  	"N",
      15,  	"O",
      16,  	"P",
      17,  	"Q",
      18,  	"R",
      19,  	"S",
      20 ,  "T",
      21,  	"U",
      22,  	"V",
      23,  	"W",
      24,  	"X",
      25,  	"Y",
      26,   "Z"]
    
    let sum = 0
    for (let letter of str){
      
      for (let i=1; i<posAndLetts.length; i=i+2){
        console.log(letter, posAndLetts[i] );
        if(letter===posAndLetts[i]){
          sum += posAndLetts[i-1]
        }
      }
    }
    console.log(sum);
    return sum
  }

  let totalSum = 0
  for(let str of arrStrs){
   let sum  = sumName(str)
   // console.log(sum);
   const position = arrStrs.indexOf(str) + 1
   totalSum += sum * position
  }
  return totalSum
}



const test0 = [ 'IS'];
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(NamesScores(test2));