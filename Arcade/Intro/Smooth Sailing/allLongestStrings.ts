function allLongestStrings(inputArray: string[]): string[] {
  let maxLength = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
    }
  }

  let longestStrings: string[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLength) {
      longestStrings.push(inputArray[i]);
    }
  }

  return longestStrings;
}
