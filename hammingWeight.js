var hammingWeight = function(n) {
  let sum = 0
  while (n) {
    sum = sum + n % 2
    n = n >> 1 // shifts the bits of the binary representation of the variable n one position to the right
  }
  return sum
};

console.log(hammingWeight(00000000000000000000000000001011))