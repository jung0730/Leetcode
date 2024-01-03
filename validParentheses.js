// tips: stack 後進先出

var isValid = function(s) {
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i= 0; i < s.length; i++) {
    if (s[i] in map) {
      if (stack.length > 0 && stack[stack.length -1] === map[s[i]]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0
};



console.log(isValid("()[]{}"))