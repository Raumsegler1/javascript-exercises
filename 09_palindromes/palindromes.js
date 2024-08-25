const palindromes = function (string) {
    // Convert string to lowercase
    let lowerstring = string.toLowerCase();
    
    // Remove all non-alphanumeric characters (punctuation, spaces, etc.)
    let string2 = lowerstring.replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    let reversedString = string2.split('').reverse().join('');
    
    // Compare the cleaned string with its reversed version
    return string2 === reversedString;
};
palindromes("3si hannAh is3")
// Do not edit below this line
module.exports = palindromes;
