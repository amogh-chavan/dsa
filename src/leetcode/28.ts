function strStr(haystack: string, needle: string): number {
  let needle_pointer = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[needle_pointer]) {
      needle_pointer++;
      if (needle_pointer === needle.length) {
        return i - needle_pointer + 1;
      }
    } else {
      i -= needle_pointer;
      needle_pointer = 0;
    }
  }

  return -1;
}

console.log(strStr("mississippi", "issip"));

/**
 * first i tried to solve this by creating a mutable string variable
 * keep on adding to varaibles in string until you match the needle string.
 * nothing wrong in this case but i missed one case
 *
 * once we dont match we reset the enter variable to empty string and skip all those variables
 * it is possible that only first variable was wrong in matching with needle
 *
 * i found this above approch which kept a counter instead of a substring
 * and decrement a counter of i if match is not found
 *
 */
