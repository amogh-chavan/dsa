const levels = 9;
// const center = (levels / 2) * 3;

for (let i = 0; i < levels; i++) {
  let row = "";

  for (let j = 0; j < levels; j++) {
    // console.log({ i, j });
    if (
      j === Math.floor(levels / 2) || //vertical diagonal
      i === Math.floor(levels / 2) || //horizontal diagonal
      i + j === Math.floor(levels / 2) || //Top left side
      j - i === Math.floor(levels / 2) || //Top right side
      i - j === Math.floor(levels / 2) || //bottom left side
      i + j === Math.floor(levels / 2) * 3 //bottom right side
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

/**
 * Output:

    *    
   ***   
  * * *  
 *  *  * 
*********
 *  *  * 
  * * *  
   ***   
    *   
 */

/**
 * 1 2 3 4 5 6 7 8 9
 * 1 2 3 4 5 6 7 8 9
 * 1 2 3 4 5 6 7 8 9
 *
 */
