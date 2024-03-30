function minDeletionSize(strs: string[]): number {
  let delete_counter = 0;
  let column_len = strs[0].length;

  for (let i = 0; i < column_len; i++) {
    let prev = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      const row = strs[j];

      if (prev > row[i]) {
        delete_counter += 1;
        break;
      }
      prev = row[i];
    }
  }

  return delete_counter;
}
