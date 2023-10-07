const pyramid_levels = 5;

for (let i = 1; i <= pyramid_levels; i++) {
  let row = "";

  for (let s = 1; s <= pyramid_levels - i; s++) {
    row += " ";
  }
  for (let s = 1; s <= i; s++) {
    if (s === 1 || s === i) {
      row += "*" + " ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
for (let i = pyramid_levels; i >= 1; i--) {
  let row = "";
  for (let s = 1; s <= pyramid_levels - i; s++) {
    row += " ";
  }
  for (let s = 1; s <= i; s++) {
    if (s === 1 || s === i) {
      row += "*" + " ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

/**
 * Output:

    * 
   * * 
  *   * 
 *     * 
*       * 
*       * 
 *     * 
  *   * 
   * * 
    * 

 */
