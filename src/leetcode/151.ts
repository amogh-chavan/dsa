function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((a) => {
      if (a !== "") return a;
    })
    .reverse()
    .join(" ");
}
console.log(reverseWords("a good   example"));
