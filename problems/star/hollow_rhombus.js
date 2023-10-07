const levels = 10;

for (let i = 0; i < levels; i++) {
  let current_row = "";
  for (let j = 0; j < levels; j++) {
    if (
      i + j === Math.floor(levels / 2) || //left side
      (i + j === levels && j > Math.floor(levels / 2)) || //right side
      (i === 0 && j > Math.floor(levels / 2)) || // top side
      (i === Math.floor(levels / 2) && j < Math.floor(levels / 2)) // bottom side
    ) {
      current_row += "*";
    } else {
      current_row += " ";
    }
  }
  console.log(current_row);
}

/**
 * Output:

     *****
    *    *
   *    * 
  *    *  
 *    *   
*****     
          

 */
