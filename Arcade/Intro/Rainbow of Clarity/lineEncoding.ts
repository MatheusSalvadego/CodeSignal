function lineEncoding(s: string): string {
  let charCount = 1;
  let result = "";
  let char = "";
  for (let i = 0; i < s.length - 1; i++) {
    char = s[i];
    if (char == s[i + 1]) {
      charCount += 1;
    } else {
      result += charCount > 1 ? charCount + char : char;
      charCount = 1;
    }
  }
  char = s[s.length - 1];
  result += charCount > 1 ? charCount + char : char;
  return result;
}
