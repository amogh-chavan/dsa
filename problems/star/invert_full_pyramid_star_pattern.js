const pyramid_levels = 5;

for (let i = pyramid_levels; i > 0; i--) {
  let current_row_spaces = "";
  let current_row_stars = "";

  let current_row_spaces_count = pyramid_levels - i;
  let current_row_stars_count = 2 * i - 1; //get odd number

  for (let s = 0; s < current_row_spaces_count; s++) {
    current_row_spaces += " ";
  }
  for (let st = 0; st < current_row_stars_count; st++) {
    current_row_stars += "*";
  }
  console.log(current_row_spaces + current_row_stars + current_row_spaces);
}

/**
 * Output:

*********
 ******* 
  *****  
   ***   
    *    

 */
