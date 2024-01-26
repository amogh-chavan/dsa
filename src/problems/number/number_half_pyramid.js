const levels = 5;

for (let i = 1; i <= levels; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

/**
 * OUTPUT

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5


*/
