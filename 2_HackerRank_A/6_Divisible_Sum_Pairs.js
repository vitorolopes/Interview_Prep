// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

const divisibleSumPairs = (n, arr, k) => {

 let n_Of_Pairs = 0;
 for (let i=0; i<n; i++){
  for(let j=i+1; j<n; j++){
     console.log(i,j);
    if( (arr[i]+arr[j]) % k === 0 ) n_Of_Pairs++
  }
 }
 return n_Of_Pairs
}


const arr =  [1, 3, 2, 6]
console.log(divisibleSumPairs(arr.length, arr,3));


