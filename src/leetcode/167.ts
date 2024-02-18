function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;

  /**
   * Incoming numbers array is in non decreasing orders
   * so if sum of i + j is < target then we can say that all the value less than i and i can
   * not make up target so we increment i.
   * vice versa for j
   *
   */

  while (i < numbers.length - 1 || j < numbers.length - 1) {
    console.log({ i, j });
    if (numbers[i] + numbers[j] === target) {
      break;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    }
  }

  return [i + 1, j + 1];
}

console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));
