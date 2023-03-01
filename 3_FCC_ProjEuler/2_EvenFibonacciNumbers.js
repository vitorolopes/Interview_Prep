// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers

// A soma dos termos de Fibo q não excedem n
// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...]
// fiboEvenSum(10) = ? --> valores da seq <'s q 10 --> [1, 2, 3, 5, 8] 

function fiboEvenSum(n) { 
  if(n<=1) return 0
  let fibo1 = 1;
  let fibo2 = 2;
  let currFibo = 0
  let fiboSum = 2
  // let fiboEvenSeq = [2]

  while (currFibo <= n){
    currFibo = fibo1 + fibo2
    if(currFibo%2===0){
      // fiboEvenSeq.push(currFibo)
      fiboSum += currFibo
    }
    fibo1=fibo2
    fibo2=currFibo 
  }

  // return fiboEvenSeq.reduce((acc,cur)=>{
  //   return acc + cur
  // },0)
  return fiboSum

}

console.log(fiboEvenSum(1));
console.log(fiboEvenSum(2));
console.log(fiboEvenSum(10));
console.log(fiboEvenSum(34));
console.log(fiboEvenSum(60));
console.log(fiboEvenSum(1000));
console.log(fiboEvenSum(100000));
console.log(fiboEvenSum(4000000));