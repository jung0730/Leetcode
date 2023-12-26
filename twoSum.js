// tips: hash map

var twoSum = function(nums, target) {
  const map = {}
  for (let i=0; i < nums.length; i++) {
    const key = nums[i]
    const counterpart = target - key
    if (counterpart in map){
      return [map[counterpart], i]
    } else {
      map[key] = i
    }
  }
};
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,1,5,3],4))
