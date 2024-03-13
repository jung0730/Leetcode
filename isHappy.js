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