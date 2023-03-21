
const distinctPowers = (n) => { 

  let terms = []
  for(let i=2; i<=n; i++){
    for(let j=2; j<=n; j++){
      if(!terms.includes(i**j)){
        terms.push(i**j)
      }
    }
  }
  const cleanedTerms = [...new Set(terms)]
  return cleanedTerms.length
}

console.log(distinctPowers(30));