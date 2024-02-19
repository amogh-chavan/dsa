function minSubArrayLen(target: number, nums: number[]): number {
  let result = Infinity;

  let l = 0; // start left pointer from zero'th index
  let total = 0; //sub array total

  //we will keep on increasing the window from right sider

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];

    //unless total is grater than equal to target keep on decresing left
    //because we want to find min of sub array
    while (total >= target) {
      result = Math.min(result, r - l + 1);
      total -= nums[l];
      l++;
    }
    console.log({ l, r, result, total });
  }

  return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
