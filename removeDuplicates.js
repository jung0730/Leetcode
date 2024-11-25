var removeDuplicates = function(nums) {
  let l = 1; // pointer紀錄出現幾個不一樣的數字
  for (let i= 1; i < nums.length ; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[l] = nums[i];
      l = l+1;
    }
  }
  return l;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));