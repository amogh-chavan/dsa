//input should be an odd number only, else the desired output will not be obtained
const levels = 9;
for (let i = 0; i < levels; i++) {
  let current_level = "";
  for (let j = 0; j < levels; j++) {
    if (
      i === 0 || // top side
      i === levels - 1 || // bottom side
      j === 0 || // left side
      j === levels - 1 || // right side
      i === j || //left to right diagonal
      i + j === levels - 1 // right to left diagonal
    ) {
      current_level += "*";
    } else {
      current_level += " ";
    }
  }

  console.log(current_level);
}

/**
 * Output:

*********
**     **
* *   * *
*  * *  *
*   *   *
*  * *  *
* *   * *
**     **
*********

 */
