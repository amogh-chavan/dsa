const pyramid_levels = 10;

for (let i = 1; i <= pyramid_levels; i++) {
  let current_row = "";
  for (let j = 0; j < i; j++) {
    current_row += "*";
  }
  console.log(current_row);
}

/**
 * Output:

*
**
***
****
*****
******
*******
********
*********
**********

 */
