// tips:
// remove spaces
// convert into lowercases
// two pointers

// ASCII
// charCodeAt()
// a -> z: 97 -> 122
// A -> Z: 65 -> 90
// 0 -> 9: 48 -> 57

// regex
// Inside Square Brackets:
// [^a-zA-Z0-9]: Matches any character that is not an uppercase letter, lowercase letter, or digit.
// Outside Square Brackets:
// ^abc: Matches 'abc' only if it appears at the beginning of a line or at the start of the string.

var isPalindrome = function(s) {
  let str = ''
  str = s.replace(/[^a-zA-Z0-9]/g, '')
  const lowercasedStr = str.toLocaleLowerCase()
  let left = 0
  let right = lowercasedStr.length - 1
  while (left < right) {
    if (lowercasedStr[left] !== lowercasedStr[right]) {
      return false
    }
    left ++
    right --
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))