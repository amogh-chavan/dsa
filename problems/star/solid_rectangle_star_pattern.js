const rows = 2;
const columns = 5;

for (let i = 0; i < rows; i++) {
  let current_row = "";
  for (let j = 0; j < columns; j++) {
    current_row += "*";
  }
  console.log(current_row);
}

/**
 * Output:
 *
 *     *****
 *     *****
 */
