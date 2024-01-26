const levels = 7;

let counter = 0;
for (let i = 1; i <= levels; i++) {
  let row_numbers = "";

  for (let k = 1; k <= i; k++) {
    counter += 1;
    row_numbers += counter + " ";
  }
  console.log(row_numbers);
}

/**
 * OUTPUT

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
16 17 18 19 20 21
22 23 24 25 26 27 28


*/
