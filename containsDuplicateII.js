// 給一個陣列nums跟一個整數k，判斷能不能在陣列中找到nums[i] = nums[j]，而且i跟j的距離不能比k還大。

var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  for (let i =0; i< nums.length; i++) {
    const key = nums[i]
    // 如果有出現重複的數字，判斷目前的位置-之前儲存的位置 <= k
    if (key in map && i - map[key] <= k) {
      return true
    } else {
      map[key] = i
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))