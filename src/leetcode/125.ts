function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    const il = s[i].toLowerCase();
    const jl = s[j].toLowerCase();
    if (
      s[i] === " " ||
      (!(il.charCodeAt(0) >= 48 && il.charCodeAt(0) <= 57) &&
        !(il.charCodeAt(0) >= 97 && il.charCodeAt(0) <= 122))
    ) {
      i++;
      continue;
    }

    if (
      s[j] === " " ||
      (!(jl.charCodeAt(0) >= 48 && jl.charCodeAt(0) <= 57) &&
        !(jl.charCodeAt(0) >= 97 && jl.charCodeAt(0) <= 122))
    ) {
      j--;
      continue;
    }

    if (il === jl) {
      i++;
      j--;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("0P"));
