function twoSum(nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const idx = map.get(nums[i]);

    if (idx !== undefined) {
      return [idx, i];
    } else {
      const diff = target - nums[i];
      map.set(diff, i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
