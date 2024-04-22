function longestSubstring(s: string, k: number): number {
  if (s.length === 1 && s.length >= k) {
    return 1;
  }

  const freq = new Map();

  for (let i = 0; i < s.length; i++) {
    const f = freq.get(s[i]);
    if (f) {
      freq.set(s[i], f + 1);
    } else {
      freq.set(s[i], 1);
    }
  }

  let max = 0;
  let valid = true;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (freq.get(s[r]) < k) {
      //split and check sub string
      max = Math.max(max, longestSubstring(s.slice(l, r), k));
      valid = false;
      l = r + 1;
    }
  }

  if (valid) {
    return s.length;
  } else {
    return Math.max(max, longestSubstring(s.slice(l), k));
  }
}
