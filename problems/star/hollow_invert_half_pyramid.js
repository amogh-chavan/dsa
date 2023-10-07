const pyramid_levels = 10;

for (let i = pyramid_levels; i > 0; i--) {
  let current_row = "";
  for (let j = 0; j < i; j++) {
    if (i === pyramid_levels || i === 1) {
      current_row += "*";
    } else {
      if (j === 0 || j === i - 1) {
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
*       *
*      *
*     *
*    *
*   *
*  *
* *
**
*

 */
