function alphabeticShift(inputString: string): string {
  let output = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] != "z") {
      output += String.fromCharCode(inputString.charCodeAt(i) + 1);
    } else {
      output += "a";
    }
  }
  return output;
}
