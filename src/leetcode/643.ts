function findMaxAverage(nums: number[], k: number): number {
  let result = -Infinity;

  //k is our window
  // in result we will store max average
  let start = 0;
  let current_total = 0;

  //we will keep on incrementing end and reset start and result once we reach window size

  for (let end = 0; end < nums.length; end++) {
    current_total += nums[end];

    //if we reach the window size then calculate average
    if (end - start + 1 === k) {
      result = Math.max(result, current_total / k);
      current_total -= nums[start];
      start += 1;
    }
  }

  return result === -Infinity ? -Infinity : result;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
