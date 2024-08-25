const fibonacci = function(num1) {
num1 = Number(num1);
if (num1 < 0) return "OOPS";
fibArr = [0, 1];
for (let i = 2; i <= num1; i++) {
    let newFib = fibArr[i-1] + fibArr[i-2];
    fibArr.push(newFib);
}
let result = fibArr[num1]
return result;
};
// Do not edit below this line
module.exports = fibonacci;
