function findSubstring(s: string, words: string[]): number[] {
  const word_length = words[0].length;
  const permutation_string_length = words.length * word_length;

  //if input s is less than requred length then no perms exists
  if (s.length < permutation_string_length) {
    return [];
  }

  let frequencey_map = new Map();

  for (let w in words) {
    const count = frequencey_map.get(words[w]);
    if (count) {
      frequencey_map.set(words[w], count + 1);
    } else {
      frequencey_map.set(words[w], 1);
    }
  }

  let frequencey_map_clone = new Map(frequencey_map);

  //reduce freq when word length is reached
  //if word does not match then change starting index
  //once we reach permutation frequency if permutation is true then add to result

  let i = 0;
  const result = [];
  while (i < s.length) {
    const perp = s.slice(i, i + permutation_string_length);
    if (perp.length < permutation_string_length) {
      break;
    }

    const words = [];
    let pass = true;
    for (let t = 0; t < perp.length; t = t + word_length) {
      const w = perp.slice(t, t + word_length);
      const wf = frequencey_map_clone.get(w);

      if (!wf) {
        i += 1;
        pass = false;
        break;
      } else {
        frequencey_map_clone.set(w, wf - 1);
        words.push(w);
      }
    }

    if (pass) {
      result.push(i);
      i = i + 1;
    }

    frequencey_map_clone = new Map(frequencey_map);
  }

  return result;
}

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));

//this solution can be improved
