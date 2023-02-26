// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr){
  let positives = 0
  let negatives = 0
  let nules = 0
  for (let i = 0; i < arr.length; i++){
    if( arr[i] > 0) {
      positives++
    } else if ( arr[i] < 0){
      negatives++
    } else {
      nules++
    }
  }
  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
  console.log((nules / arr.length).toFixed(6));

}

const arr = [1,1,0,-1,-1]

plusMinus(arr)