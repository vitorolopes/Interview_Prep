const PermutingTwoArrays = (k, A, B) => { 

//  If we sort one array in ascending order and another array in descending order 
//  and if any index does not satisfy the condition a[i] + b[i] >= K then 
//  there exists no permutation of arrays that can satisfy the inequality
//  SEE Proof in HR.pptx_2


  var arrayA = A.sort((a, b) => a - b);
  var arrayB = B.sort((a, b) => b - a);
  var result = 'YES';

  console.log(arrayA);
  console.log(arrayB);

  for (let a in arrayA) {
    console.log(a);
    console.log(arrayA[a]);
    console.log(arrayB[a]);

      if (arrayA[a]+arrayB[a]<k) {
          result = 'NO';
          break;
      }
  }
  return result;
}

const B = [2, 1, 3]; const A = [8, 9, 7]


console.log(PermutingTwoArrays(10, A, B));

// console.log(PermutingTwoArrays(5, A,B));
// const A = [1, 2, 2, 1];
// const B = [3, 3, 3, 4];
