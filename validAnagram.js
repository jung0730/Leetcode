// tips: hash map

var isAnagram = function(s, t) {
  const map = {}
  if (s.length !== t.length) return false
  for (let i = 0; i < s.length; i++) {
    const key = s[i]
    if (key in map) {
      map[key] ++
    } else {
      map[key] = 1
    }
  }
  for (let i=0; i < t.length; i++) {
    const key = t[i]
    if (map[key]) { // check if the count is greater than zero
      map[key] --
    } else {
      return false
    }
  }
  return true
};

console.log(isAnagram('aacc', 'ccac'))