function restoreString(s: string, indices: number[]): string {
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    temp[indices[i]] = s[i];
  }

  return temp.join("");
}
