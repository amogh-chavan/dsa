const levels = 10;

for (let i = 0; i < levels; i++) {
  let current_row = "";
  for (let k = levels - i; k >= 1; k--) {
    current_row += " ";
  }
  for (let j = 0; j < levels; j++) {
    current_row += "*";
  }
  console.log(current_row);
}

/**
 * Output:

          **********
         **********
        **********
       **********
      **********
     **********
    **********
   **********
  **********
 **********


 */
