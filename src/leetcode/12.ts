let map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function intToRoman(num: number): string {
  let result = "";

  for (let i in map) {
    const count = num / map[i];
    if (count > 0) {
      result += i.repeat(count);
      num = num % map[i];
    }
  }

  return result;
}
console.log(intToRoman(1994));
