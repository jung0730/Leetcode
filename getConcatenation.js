var getConcatenation = function(nums) {
  const result = [];
  for (let j=0; j < 2; j++) {
    for (let i =0; i< nums.length; i++) {
      result.push(nums[i]);
    } 
  }
  return result;
};

console.log(getConcatenation([1, 2, 1]));