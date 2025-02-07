// Solution1: recursion (會timeout)
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return climbStairs(n-1) + climbStairs(n-2)
}

console.log(climbStairs(5))

// Solution2: recursion + memo
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  const dp = []
  dp[1] = 1
  dp[2] = 2
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  
  return dp[n]
}

console.log(climbStairs(5))

var climbStairs = function(n) {
  const cache = new Array(n+1).fill(-1); // 因為index 從0開始
  function memo(n) {
    if (n === 1) {
      return 1
    }
    if (n === 2) {
      return 2
    }
    if (cache[n] !== -1) {
      return cache[n];
  }
    cache[n] = memo(n - 1) + memo(n - 2);
    return cache[n];
  }
  return memo(n)
}

console.log(climbStairs(5))