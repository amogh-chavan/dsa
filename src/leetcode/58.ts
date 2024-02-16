function lengthOfLastWord(s: string): number {
  let last_word_length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (last_word_length > 0) {
        return last_word_length;
      } else {
        continue;
      }
    } else {
      last_word_length += 1;
    }
  }

  return last_word_length;
}

console.log(lengthOfLastWord("luffy is still joyboy"));
