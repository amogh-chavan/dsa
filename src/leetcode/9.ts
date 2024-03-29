function isPalindrome(x: number): boolean {
  let temp = x;
  let rev = 0;
  while (temp !== 0) {
    const digit = Math.floor(temp % 10);
    temp = Math.floor(temp / 10);
    rev = rev * 10 + digit;
    console.log({ rev, digit, temp });
  }

  return rev === x;
}
console.log(isPalindrome(121));
