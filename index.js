// index.js
var unusedVariable="hallo"
export const sum = (a, b) => {
  return a + b + 1;
};
console.log("Sum: ", sum(1, 2));
console.log(myUndefinedVariable);

for (let i = 0; i < 10; i--) {
}
var myArray=['a', 'b', 'c']

// example: convert ['a', 'b', 'c'] --> {a: 0, b: 1, c: 2}
const indexMap = myArray.reduce(function(memo, item, index) {
  memo[item] = index;
}, {}); // Error: cannot set property 'b' of undefined

console.log(indexMap);