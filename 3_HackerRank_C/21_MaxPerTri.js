// https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

const MaxPerTri = (sticks) => { 

  let triangles = []
  let perimeters = []

  const isTriangle = (triad) => { 
   return (
        triad[0] + triad[1] > triad[2] &&
        triad[0] + triad[2] > triad[1] &&
        triad[1] + triad[2] > triad[0] 
    ) 
  }

  for(let i=0; i<sticks.length-2; i++){
    let triad = [sticks[i], sticks[i+1], sticks[i+2]]
    if(isTriangle(triad)){
      triangles.push(triad)
      perimeters.push(triad.reduce((acc, cur)=>{return acc + cur},0))
    }
  }
  console.log(triangles);
  console.log(perimeters);

  let maxPerimeterIndex = perimeters.indexOf(Math.max(...perimeters))
  console.log(maxPerimeterIndex);

  if (new Set(perimeters).size === perimeters.length){ // There is only one triangle with maximun perimeter
    return triangles[maxPerimeterIndex].sort((a,b) => a-b) // increasing order
  }

  // TODO:  Deal with the cases where there is more than on triangle that has maximum perimeter

}

const sticks = [1,2,3,4,5,10]
console.log(MaxPerTri(sticks));