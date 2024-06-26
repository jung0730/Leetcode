// tips: sliding window

var maxProfit = function(prices) {
  let left = 0 // buy
  let right = 1 // sell
  let max = 0
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]
      max = Math.max(profit, max)
    } else {
      left = right
    }
    right ++
  }
  return max
};

console.log(maxProfit([7,1,5,3,6,4]))