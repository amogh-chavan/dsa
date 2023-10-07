const levels = 5;

for (let i = levels; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

/**
 * OUTPUT

1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 


*/
