const reverseString = function(string) {
    stringArray = string.split("");
    reverseStringArray = stringArray.reverse();
    reversedString = reverseStringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
