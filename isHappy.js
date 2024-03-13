// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function(n) {
  var store = {}
  
  // 如果map裡面出現過這個數字 或 數字 = 1，停止迴圈。
  while (!store[n] && n !== 1) {
    store[n] = n
    n = n.toString().split('')
    let base = 0
    for (let i=0; i<n.length; i++) {
      base = base + n[i] * n[i]
    }
    n = parseInt(base);
  }
  return n === 1
};

console.log(isHappy(19))