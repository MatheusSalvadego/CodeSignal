function longestWord(text: string): string | undefined {
  let words = text.match(/\w+/g);
  let maxLength = 0;
  if (words != null) {
    maxLength = Math.max(...words.map((word) => word.length));
  }
  return words?.filter((word) => word.length === maxLength)[0];
}

console.log(longestWord("Ready, steady, go!"));
