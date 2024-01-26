const levels = 6;

for (let i = 1; i <= levels; i++) {
  let row = "";
  let space = "";

  for (let s = 0; s <= levels - i; s++) {
    space += "*";
  }
  for (let j = 1; j <= i; j++) {
    row += i + "*";
  }

  console.log(space + row + space);
}

/**
 * OUTPUT

******1*******
*****2*2******
****3*3*3*****
***4*4*4*4****
**5*5*5*5*5***
*6*6*6*6*6*6**

*/
