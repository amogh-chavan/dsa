function removeDuplicates(nums: number[]): number {
  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j - 1] !== nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

console.log(removeDuplicates([1, 1, 2]));
