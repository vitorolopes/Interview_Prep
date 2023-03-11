// https://www.hackerrank.com/challenges/mars-exploration/problem

const MarsExploration_1 = (str) => { 

  let sosArr = []
  let errors = 0

  for (let i=0; i<str.length; i=i+3){
    sosArr.push(str[i].concat(str[i+1], str[i+2]) )
  }

  for(let j=0; j<sosArr.length; j++){
    if(sosArr[j][0]!=="S"){
      errors++
    }
    if(sosArr[j][1]!=="O"){
      errors++
    }
    if(sosArr[j][2]!=="S"){
      errors++
    }
      
  }
  return errors
}

 const message = "SOSSPSSQSSOR"
 console.log(MarsExploration_1(message));

 //* Other, simpler, solution

 function MarsExploration_2(s){
  let n = 0;
  for (let i = 0; i < s.length; i = i + 3){
    if( s[i] !== "S"){
      n++
    } 
    if( s[i+2] !== "S"){
      n++
    } 
    if( s[i+1] !== "O"){
      n++
    } 
    console.log(n)
  }
  return n
}

const s = "SOSOOSSSS"
console.log("Number of Wrong Letters: ", MarsExploration_2(s))

// s.length --> multiplo de 3


