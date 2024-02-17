function convert(s: string, numRows: number): string {
  if (numRows === 0) return s;

  let rows = new Array(numRows).fill("");

  let dir = 1;
  let i = 0; //which row to insert char

  for (let c = 0; c < s.length; c++) {
    rows[i] += s[c];
    i += dir;

    if (i === numRows - 1) dir = -1;
    if (i === 0) dir = 1;
  }

  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
