// https://www.hackerrank.com/challenges/lonely-integer/problem

const lonelyInteger = (arr) => { 

  let lonelyInt 
  let repeated = []

  for(let i=0; i<arr.length-1; i++){

    for(let j=i+1; j<arr.length; j++){
      if(arr[i]===arr[j]){
        repeated.push(arr[i],arr[j])
      } 
    }
  }
  repeated = [...new Set(repeated)]

  for(let k=0; k<arr.length; k++){
    if(!repeated.includes(arr[k])){
      lonelyInt = arr[k]
    }
  }

  return lonelyInt
}
console.log(lonelyInteger([1,2,3,4,1,2,3]));

//* Other solution

function lonelyInteger_2(a){ 
  const counterArr = new Array(a.length).fill(0)

  for(let i=0; i < a.length; i++){

   for(let j=0; j < a.length; j++){
       if(a[i] === a[j]){
           counterArr[i]++ // the index of the element of this array that has a value of one
                           // is the index of the unique value in the input array
       }
   }

  }
  console.log(counterArr) // --> [2,2,1,2,2]
  const indexOfUniqueValue = counterArr.indexOf(1)
  return a[indexOfUniqueValue]
}

console.log(lonelyInteger_2([1,2,4,2,1,2]))