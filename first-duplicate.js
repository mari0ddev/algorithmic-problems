// Problem:
// Given an array of integers, find the first element that appears more than once.
// Return -1 if no element appears more than once.

// Example:
// Input: [2, 1, 3, 5, 3, 2]
// Output: 3 (it's the first duplicate that appears)

// Input: [1, 2, 3]
// Output: -1


function firstDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return -1;
}

// Test
console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
