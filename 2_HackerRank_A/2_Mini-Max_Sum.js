// https://www.hackerrank.com/challenges/mini-max-sum/problem

const miniMaxSum = (arr) => { 
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let sum = arr.reduce((acc,curr) => {
    return acc + curr
  },0)

  let minSum = sum - max;
  let maxSum = sum - min;

  console.log(minSum + " " + maxSum);
}

const arr = [1,2,3,4,5]
console.log(miniMaxSum(arr));