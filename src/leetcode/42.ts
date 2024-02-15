// brute force -this approch is very time consuming and rejeceted by large test case of leet code
// function trap(height: number[]): number {
//   let max_water = 0;

//   for (let i = 1; i < height.length; i++) {
//     const current_height = height[i];

//     const left_max = Math.max(...height.slice(0, i));
//     const right_max = Math.max(...height.slice(i, height.length));

//     const fill = Math.min(left_max, right_max) - height[i];
//     if (fill > 0) {
//       max_water += fill;
//     }
//   }
//   return max_water;
// }

// approch 2 calculate max left and right for each point

//space and time complexity is liner O(n)

// function trap(height: number[]): number {
//   let max_water = 0;
//   const left_max = new Array(height.length).fill(0);
//   const right_max = new Array(height.length).fill(0);

//   let current_left_max = height[0];
//   let current_right_max = height[height.length - 1];

//   for (let i = 1; i < height.length; ++i) {
//     if (height[i] > current_left_max) {
//       current_left_max = height[i];
//     }
//     left_max[i] = current_left_max;
//   }

//   for (let i = height.length - 2; i >= 0; --i) {
//     if (height[i] > current_right_max) {
//       current_right_max = height[i];
//     }
//     right_max[i] = current_right_max;
//   }

//   for (let i = 0; i < height.length; i++) {
//     const water = Math.min(left_max[i], right_max[i]) - height[i];

//     if (water > 0) max_water += water;
//   }

//   return max_water;
// }

//approch 3 uses linear time O(n) and constant space O(1)
function trap(height: number[]): number {
  let max_water = 0;

  let current_left_index = 0;
  let current_right_index = height.length - 1;

  let max_left = height[current_left_index];
  let max_right = height[current_right_index];

  while (current_left_index < current_right_index) {
    if (max_left < max_right) {
      current_left_index += 1;
      max_left = Math.max(max_left, height[current_left_index]);

      max_water += max_left - height[current_left_index];
    } else {
      current_right_index -= 1;
      max_right = Math.max(max_right, height[current_right_index]);

      max_water += max_right - height[current_right_index];
    }
  }

  return max_water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
