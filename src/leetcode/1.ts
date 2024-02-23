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

/**
 * In two sum we will store difference of each number from target in a hashmap
 * since question says there will be alway of combination of answer
 * different stored in hashmap will be a value somewhere in array
 * when you store difference in hashmap also store the index of orignal value
 */
