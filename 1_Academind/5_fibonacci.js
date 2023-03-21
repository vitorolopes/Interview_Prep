// Return the nth element of the Fibonacci Sequence

const fibo = (n) => { 
  const fiboSeq = [1,1];   
  for (let i=2; i<n; i++){
    fiboSeq.push(fiboSeq[i-1]+fiboSeq[i-2])
  }
  return fiboSeq[n-1]
}

console.log(fibo(12));


// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1
// Hence the first 12 terms will be:
//     F1 = 1
//     F2 = 1
//     F3 = 2
//     F4 = 3
//     F5 = 5
//     F6 = 8
//     F7 = 13
//     F8 = 21
//     F9 = 34
//     F10 = 55
//     F11 = 89
//     F12 = 144


