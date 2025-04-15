//  Problem:
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// A string is valid if brackets are closed in the correct order.

//  Example:
// Input: "({[]})"
// Output: true

// Input: "({[})"
// Output: false



function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

// Test
console.log(isValid("({[]})")); // true
console.log(isValid("({[})"));  // false
