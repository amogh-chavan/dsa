// Time complexity = O(26*n)
// function characterReplacement(s: string, k: number): number {
//   let max = 0;

//   let l = 0;
//   let count = {};
//   for (let r = 0; r < s.length; r++) {
//     //after incresing the window update count
//     count[s[r]] = 1 + (count[s[r]] || 0);

//     //check if our window is valid
//     while (r - l + 1 - Math.max(...(Object.values(count) as number[])) > k) {
//       count[s[l]] = (count[s[l]] || 0) - 1;
//       l += 1;
//     }
//     //set max window
//     max = Math.max(max, r - l + 1);
//   }

//   return max;
// }

function characterReplacement(s: string, k: number): number {
  let max = 0;

  let l = 0;
  let count = {};
  let max_freq = 0;
  for (let r = 0; r < s.length; r++) {
    //after incresing the window update count
    count[s[r]] = 1 + (count[s[r]] || 0);
    max_freq = Math.max(max_freq, count[s[r]]);

    //check if our window is valid
    while (r - l + 1 - max_freq > k) {
      count[s[l]] = (count[s[l]] || 0) - 1;
      l += 1;
    }
    //set max window
    max = Math.max(max, r - l + 1);
  }

  return max;
}

console.log(characterReplacement("AABABBA", 1));
