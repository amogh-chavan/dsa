const pyramid_levels = 5;

for (let i = 1; i <= pyramid_levels; i++) {
  let upper_triangle = "";
  let upper_triangle_star = "";

  for (let s = 1; s <= pyramid_levels - i; s++) {
    upper_triangle_star += "*";
  }
  for (let s = 1; s <= 2 * i; s++) {
    if (s === 1 || s === 2 * i) {
      upper_triangle += "*";
    } else {
      upper_triangle += " ";
    }
  }

  console.log(upper_triangle_star + upper_triangle + upper_triangle_star);
}

for (let i = pyramid_levels; i >= 1; i--) {
  let lower_triangle = "";

  let lower_triangle_star = "";
  for (let s = 1; s <= pyramid_levels - i; s++) {
    lower_triangle_star += "*";
  }
  for (let s = 1; s <= 2 * i; s++) {
    if (s === 1 || s === 2 * i) {
      lower_triangle += "*";
    } else {
      lower_triangle += " ";
    }
  }

  console.log(lower_triangle_star + lower_triangle + lower_triangle_star);
}

/**
 * Output:

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

 */

// 2023-10-02 18:15:00+00 - start
//2023-10-31 12:58:00+00 - end
