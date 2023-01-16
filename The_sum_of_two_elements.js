function length(arr) {
  let count = 0;
  for (let i in arr) {
    count++;
  }
  return count;
}
function twoSum(nums, target) {
  for (let i = 0; i < length(nums); i++) {
    for (let j = i + 1; j < length(nums); j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
let testCase1 = twoSum([2, 7, 11, 15], 9);
let testCase2 = twoSum([3, 2, 4], 6);
let testCase3 = twoSum([3, 3], 6);

console.log(
  "Case 1 : ",
  testCase1,
  " Case 2 : ",
  testCase2,
  " Case 3 : ",
  testCase3
);
