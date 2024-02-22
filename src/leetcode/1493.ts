function longestSubarray(nums: number[]): number {
  let last_visted_zero = -1;
  let l = 0;
  let max = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      l = last_visted_zero + 1;
      last_visted_zero = r;
    }

    max = Math.max(r - l, max);
  }
  return max;
}

console.log(longestSubarray([1, 1, 0, 1]));
