// tips: hash map

var containsDuplicate = function(nums) {
  const map = {}
  for (let i =0; i< nums.length; i++) {
    const key = nums[i]
    if (key in map) {
      map[key] ++
      return true
    } else {
      map[key] = 1
    }
  }
  return false
};

console.log(containsDuplicate([1,2,3,1]))