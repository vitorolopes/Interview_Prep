// https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem

const CountingSort_1 = (string) => {
  const arr = string.split(" ").map(string=>+string) // copied string from HR webpage and 
                                                     // transformed it into an array of numbers
  let freqArr = new Array(100).fill(0)
  
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(i===arr[j]){
        freqArr[i]++
      }
    }
  }
  return freqArr
}

const string ="63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33"
console.log(CountingSort_1(string));
//! fails for one test case (timed out)

//* Other solution 
function CountingSort_2(arr){
  const zerosArr = new Array(100).fill(0)
  for(let i = 0; i < arr.length; i++){
    zerosArr[arr[i]]++ // for i=0 -> zerosArr[arr[0]]++ = zerosArr[99]++
    // For the numbers (from 0 to 99) that are not included in arr the increment never occurs
    // since arr[i] is never going to take that value. For example, in the freqArr 1
    // is never incremented because, as 1 is not present in arr =>  zerosArr[1] never occurs, so
    // is never incremented
  }
  return zerosArr
}

const arr = [99,2,37,29,73,68,82,58,45,84,17,88,46,69,60,20,24,34,49,52,80,43,72,92,99]
console.log(CountingSort_2(arr))
//! passes  all test cases
