function sortedSquares(nums: number[]): number[] {
  let l = 0;
  let r = nums.length - 1;
  const result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      result[i] = nums[l] * nums[l];
      l++;
    } else {
      result[i] = nums[r] * nums[r];
      r--;
    }
  }

  return result;
}

//basically one a number gets squared it automatically converts to positive number
//so problem comes when input is sorted in increasing order negative values are at
//the start of array. so we remove sign and create two pointers at start and end
// and start push results from end because we are comparing from higer values to lower
