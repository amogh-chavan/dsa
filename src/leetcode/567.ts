function checkInclusion(s1: string, s2: string): boolean {
  //base cases
  if (s2.length < s1.length) return false;
  if (s1.length === 0) return true;

  let matches = 0;
  const window = s1.length;
  //create ds to keep count of each char in string s1 and s2
  const s1_count = new Array(26).fill(0);
  const s2_count = new Array(26).fill(0);

  //update count
  for (let i = 0; i < window; i++) {
    s1_count[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    s2_count[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  //update matches
  for (let i = 0; i < 26; i++) {
    if (s1_count[i] === s2_count[i]) matches += 1;
  }

  // update match for remaing windows
  let start = 0;
  for (let end = window; end < s2.length; end++) {
    if (matches === 26) return true;

    let index = s2[end].charCodeAt(0) - "a".charCodeAt(0);

    //always update frequence
    s2_count[index] += 1;

    if (s2_count[index] === s1_count[index]) {
      matches += 1;
    } else if (s2_count[index] === s1_count[index] + 1) {
      matches -= 1;
    }

    index = s2[start].charCodeAt(0) - "a".charCodeAt(0);

    //always update frequence
    s2_count[index] -= 1;

    if (s2_count[index] === s1_count[index]) {
      matches += 1;
    } else if (s2_count[index] === s1_count[index] - 1) {
      matches -= 1;
    }

    start += 1;
  }

  return matches === 26;
}
