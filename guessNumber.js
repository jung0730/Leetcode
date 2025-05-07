// 模擬系統內部的 pick（你要猜的數字）
const pick = 6;

// 題目給的 API，幫你判斷 num 跟 pick 的大小關係
function guess(num) {
  if (num > pick) return -1;
  if (num < pick) return 1;
  return 0;
}

// binary search (search range)
var guessNumber = function(n) {
  // 題目設定為 1 < pick < n
  let left = 1
  let right = n
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const result = guess(mid)
    if (result === 0) {
      return mid
    } else if (result < 0) {
      right = mid -1
    } else {
      left = mid +1
    }
  }
}

console.log(guessNumber(10))