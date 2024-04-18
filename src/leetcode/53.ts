function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let current_window_sum = 0;
  let s = 0;
  let e = 0;
  for (let i = 0; i < nums.length; i++) {
    if (current_window_sum < 0) {
      current_window_sum = 0;
      s = i;
    }

    current_window_sum += nums[i];
    if (current_window_sum > max) {
      max = current_window_sum;
      e = i;
    }
  }
  console.log({ s, e });
  return max;
}
