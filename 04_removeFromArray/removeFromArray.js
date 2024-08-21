const removeFromArray = function(myArray, ...args) { 
    for (const arg of args) {
        myArray = myArray.filter(e => e !== arg);
      }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
