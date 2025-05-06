// tips: two pointers

var targetSum = function(array, target) {
  let L = 0
  let R = array.length -1
  while (L < R) {
    if (array[L] + array[R] > target) {
      R --
    } else if (array[L] + array[R] < target) {
      L ++
    } else {
      return [L,R]
    }
  }
};
console.log(targetSum([-1, 2,3, 4,7,9],7))
