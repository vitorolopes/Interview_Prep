// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-32-pandigital-products

//! Works for every test case but in FCC platform gives a TimedOut error n=9
//! I am being to conservative in the maxNumber calculation?

const pandigitalNumbers = (n) => { 

  const maxNumber = n*10**(n-3)
 
  let seqString = ""
  for(let k=1; k<=n; k++){
    seqString += k
  }
  console.log(seqString);
 
  let prodsArr=[]
  for(let i=1; i<Math.sqrt(maxNumber); i++){
    for(let j=i+1; j<=Math.sqrt(maxNumber); j++){
      let product = i*j; 

      let candidate = [i.toString(),j.toString(), product.toString()].join("").split("").sort().join("")
                                                  // join into an unique string, spliting to create an array of strings,
                                                  // where each one of the strings has only one character.
                                                  // sort alphabetically and join into a single string again

     if(candidate.length !== n)  continue                                 

     if(candidate === seqString) {
      console.log(i,j);
      prodsArr.push(product)
     }
    }
  }
  console.log(prodsArr); 
  //! Some products can be obtained in more than one way so be sure to only include it once in your sum.
  prodsArr = [...new Set(prodsArr)]

  if(prodsArr.length === 0) return 0
  
  return prodsArr.reduce((acc,cur)=>{
                return acc + cur
  })
}

console.log(pandigitalNumbers(4));
