// sliding window (variable size)
// 找出總和 ≥ target 的最短子陣列長度，如果沒有，回傳 0
var shortestSubarray = function (array, target) {
  let L = 0
  let total = 0
  let length = Infinity

  for (let R=0; R < array.length; R++) {
    total = total + array[R]
    while (total >= target) {
      // 收縮滑動視窗的左邊界，以試圖找到一個 更短但仍有效的子陣列
      length = Math.min(R-L+1, length)
      total = total - array[L]
      L++
    }
  }
  if (length == Infinity) {
    return 0;
  } 
  return length
}

console.log(shortestSubarray([2,3,1,2,4,3], 6))