const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        if (a.yearOfDeath && b.yearOfDeath) {return ((a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))}
        else if (a.yearOfDeath) {return ((a.yearOfDeath - a.yearOfBirth) - (new Date().getFullYear() - b.yearOfBirth))}
        else if (b.yearOfDeath) {return ((new Date().getFullYear() - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))} 
        else {return ((new Date().getFullYear() - a.yearOfBirth) - (new Date().getFullYear() - b.yearOfBirth))}
    })
    let oldest = arr.pop()
    return oldest 
};  

// Do not edit below this line
module.exports = findTheOldest;
