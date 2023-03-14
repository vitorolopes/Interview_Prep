// https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem


const MaxPerTri = (sticks) => { 

   let n = sticks.length

  //* Aux func
    const isTriangle = (triad) => {  
     return (
          triad[0] + triad[1] > triad[2] &&
          triad[0] + triad[2] > triad[1] &&
          triad[1] + triad[2] > triad[0] 
      ) 
    }
  
    sticks = sticks.sort((a,b)=>b-a) //! sort in decreasing order
  
    for(let i = 0; i < n-2; i++){
      for(let j = i+1; j < n-1; j++){
        for(let k = j + 1; k <n; k++){
          let triad = [sticks[i], sticks[j], sticks[k]]
          if(isTriangle(triad)){
            return triad.sort((a,b)=>a-b) //! The 1st triad that represents the sides of a triangle
                         //! is going to be the triangle with maximum perimeter
                         //! because sticks is sorted in decreasing order (it will also have the longest minimum side)
                         // they want the solution array in non-decreasing order, that is why
                         // triad is sorted here
          }
        }
      }
    }
    
    return -1 // if there is no valid triangle
  }
   const string = "3900717 53516059 288589053 23189292 21487730 94997775 260173 41298280 47784002 23032379 67686298 48162481 44775136 47340544 2165965 34202258 81746554 57179615 6240306 33110389 7424599 41389013 480910581 86150390 13777985 96265144 89266112 316419 74896112 192317271 63729818 40712188 19111441 25556170 33808338 96043868 90508879 88229925 62520492 49835454 78096135 54610351 78888361 10300724 34843471 38439667 81892481 16254176 24261693 84190486"
   // const sticks = string.split(' ').map(Number).sort(function(a,b){return b-a});//descending order
   const sticks = [1,2,3,4,5,10]
   console.log(MaxPerTri(sticks));

  //* Failed test cases in HR platform
  //  const sticks = [1,2,3]
  //  const string= "50 2430 134 6373 215 1502 926 10312 351 74 572 3938" 
  //  const string = "1 28657 55 1346269 121393 4181 17711 2584 233 3 701408733 63245986 21 75025 13 3524578 34 10946 5 196418 46368 8 102334155 987 9227465 1597 610 317811 267914296 1 144 2178309 165580141 514229 832040 377 6765 2 89 24157817 433494437 5702887 39088169 14930352"
  //  In all the above test cases: HR correct output = 1, My solution output = -1
  //  Couldn't figure out what is wrong

  
  