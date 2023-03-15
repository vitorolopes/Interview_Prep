// const testForLoop = () => { 

//   for (let i=1; i <= 5; i++){

//      for(let j=1; j <= 5; j++){

//       if( j === 3 ) { break } //! JUMPS TO NEXT "i" BUT FIRST
//                               //! COMPLETES THE CURRENT "i" ...
//       console.log("i=",i,"j= ",j); //! ... so this is not logged 
//                                    //! anymore for the current "i" ...
//      }

//     console.log("i=",i); //! ... but this is still logged for the current "i"

//   }

// }


const testForLoop = (arr1, arr2, arr3) => { 

loop1:
  for(let i of arr1){
loop2:
    for(let j of arr2){
loop3:
      for(let k of arr3){

        if( j === "C" && k === "/"){
          break loop2
        }
        console.log(i,j,k);
      }

    }

  }

}

testForLoop( [1,2,3,4,5], ["A", "B", "C", "D"], ["-", "+", "/"] )


// -------------------------------------

