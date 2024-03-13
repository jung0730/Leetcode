var majorityElement = function(nums) {
  const map = {}
  for (let i=0; i< nums.length; i++) {
    const key = nums[i]
    if (key in map) {
      map[key] +=1
    } else {
      map[key] = 1
    }
    // The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
    if (map[key] > nums.length / 2) {
      return key
    }
  }
};

console.log(majorityElement([2,2,1,1,1,2,2]))