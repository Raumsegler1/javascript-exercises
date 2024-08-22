const sumAll = function(numStart, numEnd) {
    let total = 0;
    if (numStart < 0 || numEnd < 0 || !Number.isInteger(numStart) || !Number.isInteger(numEnd)) {
        return "ERROR"
    }
    for (let i = Math.min(numStart, numEnd); i <= Math.max(numStart, numEnd); i++) {
        total += i;
        console.log(total)
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
