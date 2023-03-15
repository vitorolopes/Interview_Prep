// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

const findSymDif = (...args) => { 
  let arr1 = args[0]
  // console.log("array",arr1);

  for (let k=0; k<args.length-1; k++){
    let arr2 = args[k+1]
    arr1 = findSymDif_Between2Arrs(arr1,arr2)
    // arr1 for k=0 is the 1st array of the arguments list (args[0]) and arr2 is args[1]
    // arr1 for k=1 is the result of calling findSymDif_Between2Arrs(args[0], args[1]) and arr2 is args[2]
    // ...
    //* In each k iteration the arr1 
    //* is always going to be the one that is created in the previous k iteration (except for k=0)
  }
  return arr1.sort((a,b)=> a-b)
}

// Considering only 2 input arrays
const findSymDif_Between2Arrs = (arr1, arr2) => { 
  arr1 = [...new Set(arr1)] // Remove duplicates
  arr2 = [...new Set(arr2)]
  
  let extractedFrom1 = []
  let removedFrom2 = arr2
  for (let el of arr1){
    if(!arr2.includes(el)){ //* if this el of arr1 is not present in arr2 ...
      extractedFrom1.push(el) //* ... we want it to be in the result array (symDiff) , so we push it into extractedFrom1 ..
      // console.log("extracted", extractedFrom1);
    }else{ //* ... If it is present in arr2 we do not want it in the result array (symDiff)...
      const index = arr2.indexOf(el) //* ... so we find its index in arr2 ...
      removedFrom2.splice(index,1) //* ... and remove it from removedFrom2 array
      //console.log("removed",removedFrom2);
    }
  }
  let symDiff = extractedFrom1.concat(removedFrom2)
  symDiff = [...new Set(symDiff)] // just in case we remove duplicates again
  // console.log(symDiff);
  return symDiff
}


console.log(findSymDif([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); 
// console.log(findSymDif_Between2Arrs([1, 1, 2, 5], [2, 2, 3, 5])); //! Watch out this case. If I do not remove duplicates (lines 21 and 22) ...
//! ... in the 3rd iteration I remove 2 from arr2 ... but there is another 2 ... so the final result (if I do not remove duplicates is [1,2,3])
//! and not [1,3] as it should be.