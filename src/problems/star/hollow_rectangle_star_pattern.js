const rows = 5;
const columns = 10;

for (let i = 0; i < rows; i++) {
  let current_row = "";
  for (let j = 0; j < columns; j++) {
    if (i === 0 || i === rows - 1) {
      current_row += "*";
    } else {
      if (j === 0 || j === columns - 1) {
        current_row += "*";
      } else {
        current_row += " ";
      }
    }
  }
  console.log(current_row);
}

/**
 * Output:

**********
*        *
*        *
*        *
**********

 */
