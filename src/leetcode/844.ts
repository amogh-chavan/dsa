// Time complexity = O(n + m)
//Space complexity = O(n + m)

// function backspaceCompare(s: string, t: string): boolean {
//     const s_stack = []
//     const t_stack = []

//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== '#') {
//         s_stack.push(s[i])
//       } else {
//         s_stack.pop()
//       }
//     }

//     for (let i = 0; i < t.length; i++) {
//       if (t[i] !== '#') {
//         t_stack.push(t[i])
//       } else {
//         t_stack.pop()
//       }
//     }

//     console.log({s_stack,t_stack})

//     if (s_stack.toString() === t_stack.toString()) {
//       return true
//     } else {
//       return false
//     }

//   };

function backspaceCompare(s: string, t: string): boolean {
  let s_pointer = s.length - 1;
  let t_pointer = t.length - 1;

  while (s_pointer >= 0 || t_pointer >= 0) {
    //get next valid pointer
    //if char at next valid pointer of both string is not equal
    //throw error
    s_pointer = getNextValidChar(s, s_pointer);
    t_pointer = getNextValidChar(t, t_pointer);

    if (s[s_pointer] !== t[t_pointer]) {
      return false;
    } else {
      s_pointer--;
      t_pointer--;
    }
  }
  return true;
}

function getNextValidChar(str: string, max_index: number) {
  let spaces = 0;
  let char;
  for (let i = max_index; i >= 0; i--) {
    char = str[i];
    if (char !== "#" && spaces > 0) {
      spaces -= 1;
    } else {
      if (char === "#") {
        spaces += 1;
      } else {
        return i;
      }
    }
  }
}
