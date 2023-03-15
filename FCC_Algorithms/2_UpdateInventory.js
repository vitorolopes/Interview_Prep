// freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

const UpdateInventory = (curInv, newInv) => { 

  let itemNameArr = [] // I am going to use this array in the last for loop
  for(let item of curInv){
    itemNameArr.push(item[1])
  }

  let newInvCleaned = [] // 
  for(let k=0; k<newInv.length; k++){
    if(!itemNameArr.includes(newInv[k][1])){ // if this item of the newInv is not included in the curInv ...
      curInv.push(newInv[k]) // ... push the item into the curInv ...
    } else { // ... if this item is included in the curInv ...
      newInvCleaned.push(newInv[k]) // ... push into an array that only contains the items to be updated
    }
  }
  console.log(curInv); console.log(newInvCleaned);
  
  for (let i=0; i<newInvCleaned.length; i++){
    for(let j=0; j<curInv.length; j++){
        
      if(newInvCleaned[i][1] === curInv[j][1]){
        curInv[j][0] = curInv[j][0] + newInvCleaned[i][0]
      }

    }
  }

  curInv.sort((a,b)=> { //! sort alphabetically
    if( a[1] < b[1] ) return -1
    if( a[1] > b[1] ) return 1
    return 0
  })
  
  return curInv
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(UpdateInventory(curInv, newInv));
// [
//   [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]
//   [88, "Bowling Ball"], [2, "Dirty Sock"],   [3, "Hair Pin"], 
// ]