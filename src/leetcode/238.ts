function productExceptSelf(nums: number[]): number[] {
  const result = [];
  //prefix
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined) {
      result.push(1);
    } else {
      result.push(
        result[i - 1] * nums[i - 1] === -0 ? 0 : result[i - 1] * nums[i - 1]
      );
    }
  }

  let postfix = 1;
  //postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i + 1] === undefined) {
      result[i] = postfix * result[i];
    } else {
      postfix = postfix * nums[i + 1];
      result[i] = result[i] * postfix === -0 ? 0 : result[i] * postfix;
    }
  }
  return result;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
