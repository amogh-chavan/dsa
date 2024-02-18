function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  /**
   * create two pointers.
   * 1st pointer on sub string
   * 2nd pointer on entier string
   *
   * if both pointers match then icrement both pointer
   * if they dont match then move second pointer only
   */

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  if (i === s.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubsequence("acb", "ahbgdc"));
