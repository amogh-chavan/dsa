function longestOnes(nums: number[], k: number): number {
  let count_zero = 0;

  let l = 0;

  let max = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      count_zero += 1;
    }

    if (count_zero <= k) {
      max = Math.max(r - l + 1, max);
    } else {
      //shift left pointer
      if (nums[l] === 0) {
        count_zero -= 1;
      }
      l += 1;
    }
  }

  return max;
}

console.log(longestOnes([0, 0, 0, 0], 0));
