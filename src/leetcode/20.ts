function isValid(s: string): boolean {
  let map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = map[s[i]];
    if (!c) {
      stack.push(s[i]);
    } else {
      const pc = stack.pop();
      if (pc !== c) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}
