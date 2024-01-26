const levels = 7;
let pascalsTriangle = [];

for (let i = 0; i < levels; i++) {
  pascalsTriangle[i] = [];

  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      pascalsTriangle[i][j] = 1;
    } else {
      pascalsTriangle[i][j] =
        pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];
    }
  }
}
console.log("pascalsTriangle", pascalsTriangle);
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
