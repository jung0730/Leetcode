// const array = ['a', 'b', 'c'];
// const string = 'd';
// const newArray = array.concat(string);  // ['a', 'b', 'c', 'd']

// tips: bucket sort
var topKFrequent = function(nums, k) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    if (key in map) {
      map[key] ++
    } else {
      map[key] = 1
    }
  }
  const freq = Array.from({ length: nums.length}, () => 0)
  for (const key in map) {
    freq[map[key]] = (freq[map[key]] || []).concat(key);
  }
  const result = []
  for (let j = freq.length - 1; j >= 0; j--) {
    for (let i in freq[j]) { // for-in array keys
      result.push(freq[j][i])
      if (result.length === k) {
        return result
      }
    }
  }
};

console.log(topKFrequent([1,2], 2))
console.log(topKFrequent([1,1,1,2,2,3],2))
