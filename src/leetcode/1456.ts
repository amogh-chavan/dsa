function maxVowels(s: string, k: number): number {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  //window size is given
  let l = 0;
  let max = 0;

  let current_window_vowels = 0;
  for (let r = 0; r < s.length; r++) {
    if (vowels[s[r]]) {
      current_window_vowels += 1;
    }

    //decrease the window size
    if (r - l + 1 > k) {
      if (vowels[s[l]]) {
        current_window_vowels -= 1;
      }
      l++;
    }

    max = Math.max(max, current_window_vowels);
  }

  return max;
}

console.log(maxVowels("leetcode", 3));
