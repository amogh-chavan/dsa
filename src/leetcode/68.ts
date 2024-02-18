function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];

  let i = 0;
  let current_sentence_words = [];
  let current_sentence_length = 0;

  while (i < words.length) {
    //add words to current sentence

    if (
      current_sentence_length + // current sentence only word length
        current_sentence_words.length + // one space for all words and new word
        words[i].length > // new word length
      maxWidth
    ) {
      //out sentence has reached max limit push it to result

      //add spaces
      const extra_space = maxWidth - current_sentence_length;

      //spaces between two words
      //-1 one because we want to exclude space for last word
      //Math.max 1 because we want to make sure denominator stay > 0
      const spaces =
        extra_space / Math.max(1, current_sentence_words.length - 1);

      //spaces which can not be evenly distributed can be added from left in a greedyy way
      let remaining_spaces =
        extra_space % Math.max(1, current_sentence_words.length - 1);

      //finally it is time to add spaces
      //we will loop over each varible and add spaces and remaing spaces to that word

      //we dont need to add space to last word
      for (let j = 0; j < Math.max(1, current_sentence_words.length - 1); j++) {
        current_sentence_words[j] += " ".repeat(spaces);

        if (remaining_spaces) {
          //remaining spaces will get equally distrucbuted from left to right
          current_sentence_words[j] += " ";
          remaining_spaces -= 1;
        }
      }

      //once spaces are added it is time to join words make sentence and push it in result
      result.push(current_sentence_words.join(""));

      current_sentence_words = [];
      current_sentence_length = 0;
    }

    current_sentence_length += words[i].length;
    current_sentence_words.push(words[i]);
    i++;
  }

  // last line will not get added in result. so handle it here
  //last line will left justified

  //join by 1 space. because one space is by default
  let last_line = current_sentence_words.join(" ");

  const remaining_spaces = maxWidth - last_line.length;

  last_line += " ".repeat(remaining_spaces);

  result.push(last_line);

  return result;
}

console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);
