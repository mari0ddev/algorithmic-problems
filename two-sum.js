//  Problem:
// Given an array of integers (nums) and a target number,
// return the indices of the two numbers that add up to the target.
// You may assume that each input would have exactly one solution.

// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)




function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }

  return null;
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
