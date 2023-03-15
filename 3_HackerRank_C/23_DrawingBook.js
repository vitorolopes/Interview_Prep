// https://www.hackerrank.com/challenges/drawing-book/problem


const DrawingBook = (n,p) => { 

  let f2b = 1
  let f2bArr = [f2b]
  if(p===f2b) return 0
  let pagesF2B = 1
  let countF2B = 0
  
  while(!f2bArr.includes(p)){
    f2bArr.push(pagesF2B+1, pagesF2B+2)
    pagesF2B = pagesF2B + 2
    countF2B++
  }

  
  let countB2F = 0
  let b2fArr = n%2 === 0 ? [n] : [n, n-1]
  let pagesB2F = b2fArr[b2fArr.length-1]

  while(!b2fArr.includes(p)){
    b2fArr.push(pagesB2F-1, pagesB2F-2)
    pagesB2F = pagesB2F - 2
    countB2F++
  }

  return Math.min(countF2B, countB2F)
}

 console.log(DrawingBook(5,4));