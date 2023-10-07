const levels = 5;

for (let i = 1; i <= levels; i++) {
  let row_numbers = "";

  let row_spaces = "";
  let row_spaces_count = levels - i;
  let row_numbers_count = 2 * i - 1;

  for (let j = 1; j <= row_spaces_count; j++) {
    row_spaces += "  ";
  }

  for (let k = 1; k <= row_numbers_count; k++) {
    row_numbers += k + " ";
  }
  console.log(row_spaces + row_numbers + row_spaces);
}

/**
 * OUTPUT

        1         
      1 2 3       
    1 2 3 4 5     
  1 2 3 4 5 6 7   
1 2 3 4 5 6 7 8 9 


*/
