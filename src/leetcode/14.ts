function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let common_prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let new_prefix = "";
    for (let j = 0; j < common_prefix.length; j++) {
      if (common_prefix[j] === strs[i][j]) {
        new_prefix += strs[i][j];
      } else {
        break;
      }
    }
    common_prefix = new_prefix;
  }

  return common_prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
