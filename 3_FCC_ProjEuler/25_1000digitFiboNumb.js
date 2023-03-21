// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-25-1000-digit-fibonacci-number

const digitFibo = (n) => { 

  let nthTermValue = 1
  let index = 1

  const fibo = (n) => { 
    const fiboSeq = [1,1];   
    for (let i=2; i<n; i++){
      fiboSeq.push(fiboSeq[i-1]+fiboSeq[i-2])
    }
    return fiboSeq[n-1]
  }

  while(nthTermValue.toString().length < n){
    nthTermValue = fibo(index)
    index++
  }
  return index-1 // in the last but one iteration of the while loop 
  // we are going to get the first term to contain n digits but we
  // increment index in that iteration so we have to return index-1
}

console.log(digitFibo(5));