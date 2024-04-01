function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;

  while (i >= 0 && digits[i] === 9) {
    digits[i] = 0;
    i--;
  }

  if (i < 0) {
    digits.unshift(1);
  } else {
    digits[i]++;
  }

  return digits;
}
