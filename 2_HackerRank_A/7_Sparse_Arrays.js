// https://www.hackerrank.com/challenges/sparse-arrays/problem#!

const sparseArrays = (stringList, queries) => { 
  const result = new Array(queries.length).fill(0)

  for (let i=0; i < queries.length; i++){
    for (let j=0; j < stringList.length; j++){
      if( queries[i]  === stringList[j]){
        result[i]++
      }
    }
  }
   
  return result
}

const queries = ["aba", "xzxb", "ab"]
const stringList = ["aba", "baba", "aba", "xzxb"]
console.log(sparseArrays(stringList, queries));