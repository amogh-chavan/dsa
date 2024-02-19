function lengthOfLongestSubstring(s: string): number {
  //create a set to track all characters in our window
  const set = new Set();

  let l = 0;

  let max_substring = 0;
  //add characters one by one using r pointer
  for (let r = 0; r < s.length; r++) {
    if (set.has(s[r])) {
      //keep on removing chars from left until you find char
      while (s[l] !== s[r]) {
        set.delete(s[l]);
        l++;
      }
      set.delete(s[l]);
      l++;
    }
    //simply update set, max count
    set.add(s[r]);
    max_substring = Math.max(max_substring, r - l + 1);
  }

  return max_substring;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
