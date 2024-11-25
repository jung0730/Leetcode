var removeElement = function(nums, val) {
  let l = 0;
  for (let i=0; i< nums.length; i++) {
    if (nums[i] !== val) {
      nums[l] = nums[i];
      l = l+1;
    }
  }
return l;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))