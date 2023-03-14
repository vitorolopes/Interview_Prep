// https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

//! In HR platform some cases return "Runtime Error", others "Wrong Answers", other are OK.
//! The ones I tested all give the correct answer and run fast.
//! SEE 21_MaxPerTri_2.js

const MaxPerTri = (sticks) => { 

  let triangles = []
  let perimeters = []

//* Aux funcs
  const isTriangle = (triad) => { 
   return (
        triad[0] + triad[1] > triad[2] &&
        triad[0] + triad[2] > triad[1] &&
        triad[1] + triad[2] > triad[0] 
    ) 
  }

  const getAllIndexes = (arr, val) => {
    let indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
  }
//* -----


  for(let i=0; i<sticks.length-2; i++){
    let triad = [sticks[i], sticks[i+1], sticks[i+2]]
    if(isTriangle(triad)){
      triangles.push(triad)
      perimeters.push(triad.reduce((acc, cur)=>{return acc + cur},0))
    }
  }

  if(triangles.length === 0) return -1  //* Degenerate Triangle

  console.log("triangles: ", triangles); // ------------- LOG
  console.log("perimeters: ", perimeters); // ------------- LOG

  const maxPerimeter = Math.max(...perimeters)
  const indexesOfMaxPerimeter = getAllIndexes(perimeters, maxPerimeter)
  console.log("indexesOfMaxPerimeter: ", indexesOfMaxPerimeter); // ------------- LOG
 
  if(indexesOfMaxPerimeter.length === 1) { //* Just 1 Triangle with maximum perimeter
    console.log(triangles[indexesOfMaxPerimeter[0]]);// ------------- LOG output
    return triangles[indexesOfMaxPerimeter[0]] 

  } else {                                 //* More than 1 Triangle with maximum perimeter
      let indexOfTriWithLongestSide = 0
      let longestSide = 0
      for (let index of indexesOfMaxPerimeter){
          if( Math.max(...triangles[index]) > longestSide) {
            longestSide = Math.max(...triangles[index])
            console.log("longest side: ", longestSide); // ------------- LOG
            indexOfTriWithLongestSide = index
          }
      }
      console.log(triangles[indexOfTriWithLongestSide] );// ------------- LOG output
      return triangles[indexOfTriWithLongestSide] 
  }
}

// const string = "3900717 53516059 288589053 23189292 21487730 94997775 260173 41298280 47784002 23032379 67686298 48162481 44775136 47340544 2165965 34202258 81746554 57179615 6240306 33110389 7424599 41389013 480910581 86150390 13777985 96265144 89266112 316419 74896112 192317271 63729818 40712188 19111441 25556170 33808338 96043868 90508879 88229925 62520492 49835454 78096135 54610351 78888361 10300724 34843471 38439667 81892481 16254176 24261693 84190486"
// const arrayFrom_string = string.split(" ").map(str=>+str)
// console.log(arrayFrom_string);

const sticks = [1,2,3,4,5,10]
console.log(MaxPerTri(sticks));

