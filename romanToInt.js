var romanToInt = function(s) {
  const hashMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let num = 0
  for (let i=0; i< s.length; i++) {
    const cur = hashMap[s[i]]
    const next = hashMap[s[i+1]]
    if (cur < next) {
      num = num + (next - cur)
      i++ // 一次處理兩個roman, 所以i要+2
    } else {
      num = num + cur
    }
  }
  return num
};

console.log(romanToInt('MCMXCIV'))