const levels = 5;

for (let i = 1; i <= levels; i++) {
  let row = "";
  let space = "";

  for (let s = 0; s <= levels - i; s++) {
    space += "  ";
  }
  for (let j = 1; j <= i - 1; j++) {
    row += j + " ";
  }
  for (let k = i; k >= 1; k--) {
    row += k + " ";
  }
  console.log(space + row + space);
}

/**
 * OUTPUT

          1
        1 2 1
      1 2 3 2 1
    1 2 3 4 3 2 1
  1 2 3 4 5 4 3 2 1

*/
