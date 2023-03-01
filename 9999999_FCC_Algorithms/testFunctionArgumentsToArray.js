const convertFunctionArgumentsToArray = (...args) => { 
  
  const arrOfArrs = Array.from(args)
  console.log(arrOfArrs);
  
  const arr0 = args[0]
  const arr2 = args[2]
  console.log(arr0, "--", arr2);
}

convertFunctionArgumentsToArray([2,1],[0,5,6], [9])