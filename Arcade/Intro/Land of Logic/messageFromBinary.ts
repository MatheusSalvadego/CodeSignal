function messageFromBinaryCode(code: string): string {
  let letters = splitBinaryString(code, 8).map(Number);
  return String.fromCharCode(...letters);
}

function splitBinaryString(str: string, parts: number): string[] {
  let substrings: string[] = [];
  for (let i = 0; i < str.length; i += parts) {
    let substring = str.substring(i, i + parts);
    substrings.push("0b" + substring);
  }
  return substrings;
}
