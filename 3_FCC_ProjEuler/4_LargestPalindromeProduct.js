// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product

function LargestPalindromeProduct(nDigits){

  function checkPalindrome(number){
    let wordComplete = number.toString()
    const middle = Math.floor(wordComplete.length/2);
    let word1stPart
    let word2ndPart

    if(wordComplete.length%2===0){
      word1stPart= wordComplete.slice(0,middle)
      word2ndPart= wordComplete.slice(middle)
    } else {
       word1stPart= wordComplete.slice(0,middle)
       word2ndPart= wordComplete.slice(middle+1)
    }
   //  console.log(word1stPart, word2ndPart);
    word2ndPartReversed = word2ndPart.split("").reverse().join("")
    if( word1stPart === word2ndPartReversed){
      return true
    }
  }

  const nMax = 10**nDigits-1 // nDigits=3 -> nMax=10^3-1=1000-1=999
  const nMin = 10**(nDigits-1) // nDigits=3 -> nMin=10^(3-1)=100
  let palindromes = []

  for (let i=nMax; i>=nMin; i--){
    for(let k=nMax; k>=nMin; k--){
      let number = i * k;
      if(checkPalindrome(number)) {
        palindromes.push(number)      
      }
    }
  }
 return Math.max(...palindromes)
}

console.log(LargestPalindromeProduct(2));
console.log(LargestPalindromeProduct(3));
