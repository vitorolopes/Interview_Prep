// https://www.hackerrank.com/challenges/sock-merchant/problem

//! Works but TimeOut Error on HR platform
const SalesByMatch = (arr) => { 

  let valuesAlreadyComputed = []
  let total = 0

  for(let i=0;i<arr.length-1;i++){

    let count = 1
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]===arr[j] && !valuesAlreadyComputed.includes(arr[i])){
        count++
      }
    }

    valuesAlreadyComputed.push(arr[i])

    if(count%2===0){
      total = total + count/2
    }else{
      total = total + (count-1)/2
    }
    
  }
  return total
 }



//! This one gives no error!
const SalesByMatch_2 = (arr) => {
  const arrSet = [...new Set(arr)]
  const freqArr = new Array(arrSet.length).fill(0)

  let count = 0

  console.log(arrSet);
  console.log(freqArr);

  for(let i=0; i<arrSet.length;i++){
    for (let j=0; j<arr.length; j++){
      if(arrSet[i] === arr[j]){
        freqArr[i]++
      }
    }
  }

  console.log(freqArr);
  for(let el of freqArr){
    if(el%2===0){
      count = count + el/2
    }else{
      count = count + (el-1)/2
    }
  }
  
  return count
}

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// console.log(SalesByMatch(arr));
console.log(SalesByMatch_2(arr));