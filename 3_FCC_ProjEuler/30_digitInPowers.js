

const digitInPowers = (n) => { 
  let limit = n*10**n
  console.log(limit);
  let resultArr = []
  for(let i = 2; i<limit; i++){
    let str = String(i)
    let arrOfStrs = str.split("")
    let arrOfNums = arrOfStrs.map(str => (+str)**n)
    const sum = arrOfNums.reduce((acc,cur)=>{return acc + cur})
    if(sum===i){
      resultArr.push(i)
    }
  }

  if(resultArr.length>0){
    const totalSum = resultArr.reduce((acc,cur)=> {return acc+cur})
    return totalSum
  } else {
      return 0
  }
}

console.log(digitInPowers(5));