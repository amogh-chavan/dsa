function maxArea(height: number[]): number {
  let i = 0; //left pointer
  let j = height.length - 1; //last index

  let max = 0;
  //we need to find width and height
  // to find width we will subtract j - i
  // to find height we will take min of left most column and right most column

  while (i <= j) {
    const min_height = Math.min(height[i], height[j]);

    const min_width = j - i;

    max = Math.max(max, min_height * min_width);
    console.log({ i, j, max, min_height, min_width });
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
