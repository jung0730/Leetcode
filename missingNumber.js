var missingNumber = function(nums) {
  // const original = [...Array(nums.length + 1).keys()].reduce((acc, cur) => acc+ cur, 0)
  const original = (0 + nums.length) * (nums.length + 1) / 2
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  return original - sum
};

console.log(missingNumber([3,0,1]))