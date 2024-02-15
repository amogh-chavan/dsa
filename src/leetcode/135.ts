function candy(ratings: number[]): number {
  let min_candies = 0;
  const ltr_candies = new Array(ratings.length).fill(1);
  const rtl_candies = new Array(ratings.length).fill(1);

  //left to right
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr_candies[i] = ltr_candies[i - 1] + 1;
    }
  }

  //right to left
  for (let i = ratings.length - 1; i >= 0; i--) {
    console.log(min_candies);
    if (ratings[i] > ratings[i + 1]) {
      rtl_candies[i] = rtl_candies[i + 1] + 1;
    }
  }
  console.log(ltr_candies, rtl_candies);

  for (let i = 0; i < ratings.length; i++) {
    min_candies += Math.max(ltr_candies[i], rtl_candies[i]);
  }
  return min_candies;
}

console.log(candy([1, 2, 87, 87, 87, 2, 1]));

/**
 * This program implements an algorithm to solve the "Candy" problem, where you need to distribute candy to a group of children with given ratings, ensuring that a child with a higher rating gets more candy than its neighbors with lower ratings. The algorithm follows a two-pass approach, similar to the "peak finding" algorithm.

Here's a breakdown of the algorithm, method, and approach:

1. **Algorithm**: The algorithm used here is a two-pass approach to distribute candies.

2. **Method and Approach**:
   - **Initialization**: Initialize an array `ltr_candies` and `rtl_candies` with the same length as the ratings array, filled with 1. These arrays will hold the number of candies assigned to each child from left to right and right to left, respectively.

   - **Left to Right Pass**: Traverse the ratings array from left to right. For each child, if the current child's rating is greater than the previous child's rating, assign one more candy to the current child than the previous one.

   - **Right to Left Pass**: Traverse the ratings array from right to left. For each child, if the current child's rating is greater than the next child's rating, adjust the number of candies assigned to the current child accordingly. This pass ensures that the right neighbors also get the correct number of candies relative to their ratings.

   - **Final Count**: Finally, iterate through both `ltr_candies` and `rtl_candies` arrays simultaneously and at each position, take the maximum of the two values and add it to `min_candies`.

   - **Return**: Return the total number of candies calculated.

3. **Complexity**: The time complexity of this algorithm is O(n), where n is the number of children. This is because it iterates over the ratings array twice, and both iterations involve linear time complexity operations. The space complexity is O(n) as well, due to the additional arrays created to store the number of candies assigned to each child.

This approach ensures that each child gets the correct minimum number of candies required while satisfying the conditions of the problem.
*/
