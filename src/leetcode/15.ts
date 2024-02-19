function threeSum(nums: number[]): number[][] {
  //first we sort the array
  nums.sort((a, b) => a - b);
  const result = [];

  //then break down 3 sum problem to 2 sum for that we keep first element as fixed
  // and perform 2 sum on remaing 2.

  for (let i = 0; i < nums.length; i++) {
    //also make sure we dont put duplicates
    //since array is sorted if there are duplicates they will be one after another
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        result.push([nums[i], nums[l], nums[r]]);

        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return result;
}
