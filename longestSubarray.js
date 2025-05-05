// sliding window (variable size)
var longestSubarray = function (array) {
  let length = 0
  let L = 0
  
  for (let R=0; R < array.length; R++) {
    if (array[L] != array[R]) {
      L = R // 把 L 移動到新的起點 R，表示這段連續相同的數已經結束，開啟下一段
    }
    length = Math.max(length, R - L +1) // 這一段（從 L 到 R）有幾個一樣的數？比我目前記錄的最長長嗎？有的話就更新
  }
  return length

}

console.log(longestSubarray([1,1,2,2,2,3,3]))