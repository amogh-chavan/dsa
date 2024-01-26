const levels = 5;

for (let i = 1; i <= levels; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (i === 1 || i === levels) {
      row += j + " ";
    } else {
      if (j === 1 || j === i) {
        row += j + " ";
      } else {
        row += "  ";
      }
    }
  }
  console.log(row);
}

/**
 * OUTPUT

1
1 2
1   3
1     4
1 2 3 4 5


*/
