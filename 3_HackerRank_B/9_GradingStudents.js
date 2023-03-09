// https://www.hackerrank.com/challenges/grading/problem


function GradingStudents_1(arr) {
    for(let i = 0; i <  arr.length; i++){
      
      if(arr[i]<38){
        
        continue

      } else if (arr[i] % 5 >= 3){
         
          if(arr[i]%5===3) {
            arr[i] = arr[i] + 2
          }

          if(arr[i]%5===4){ 
            arr[i] = arr[i] + 1
          }
      } 

    }
    return arr
}

// Other solution

const GradingStudents_2 = (grades) => {
    
  let finalGrades = []
  
  for (let grade of grades){
      let prevMult = grade - ( grade % 5 )
      if(grade < 38) {
          finalGrades.push(grade)
       
      } else if( grade - prevMult >= 3 ){
          finalGrades.push(prevMult + 5 )
           
      } else {
          finalGrades.push(grade)
          
      }
  }
  return finalGrades
}






console.log(GradingStudents_1([73, 67, 39, 33]));
console.log(GradingStudents_2([73, 67, 39, 33]));