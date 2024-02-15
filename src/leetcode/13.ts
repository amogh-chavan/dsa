let master_map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let number = 0;

  for (let c = 0; c < s.length; c++) {
    if (master_map[s[c + 1]] && master_map[s[c]] < master_map[s[c + 1]]) {
      number += master_map[s[c + 1]] - master_map[s[c]];
      c++;
    } else {
      number += master_map[s[c]];
    }
  }

  return number;
}

console.log(romanToInt("MCMXCIV"));
