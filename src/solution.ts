function s(strs: string[]): string {
  let lprefix = "";
  if (strs.length === 0) {
    return lprefix;
  }

  for (let i = 0; i < strs.length; i++) {
    if (i === 0) {
      lprefix = strs[i];
    } else {
      let new_str = "";
      //compare
      for (let j = 0; j < lprefix.length; j++) {
        if (strs[i][j] === lprefix[j]) {
          new_str += lprefix[j];
        } else {
          lprefix = new_str;
          break;
        }
      }
    }
  }

  return lprefix;
}

console.log("result: ", s(["ab", "a"]));
