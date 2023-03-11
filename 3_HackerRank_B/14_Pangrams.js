// https://www.hackerrank.com/challenges/pangrams/problem

const Pangrams = (str) => { 

  let alphabet = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
  let alphabetArray = alphabet.split(", ")
  //* Creates an array of English Alphabet characters (Upper Case)
  // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  // const alphabet = alpha.map((x) => String.fromCharCode(x)); 

  let phrase = str.toLowerCase()
  let newAlphabetArray = []

  for(let i=0; i<alphabetArray.length; i++){
    if( phrase.includes(alphabetArray[i]) ){
      newAlphabetArray.push(alphabetArray[i])
    }
  }

  return newAlphabetArray.length === 26 ? "pangram" : "not pangram"
}

const string = "We promptly judged antique ivory buckles for the next prize"
console.log(Pangrams(string));



