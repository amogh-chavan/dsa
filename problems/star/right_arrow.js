const levels = 11;
for (let i = 0; i < levels; i++) {
  let row = "";

  for (let j = 0; j < levels; j++) {
    if (
      i === Math.floor(levels / 2) ||
      i - j === Math.floor(levels / 2) ||
      i + j === Math.floor(levels / 2)
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

/**
 *
 *      *
 *     *
 *    *
 *   *
 *  *
 * ***********
 *  *
 *   *
 *    *
 *     *
 *      *
 */
