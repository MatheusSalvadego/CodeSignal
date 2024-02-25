function stringRearrangement(inputArray: string[]): boolean {
  const charFrequencyMap = getFrequencyCount(inputArray);
  for (const count of Object.values(charFrequencyMap)) {
    if (count > 1) {
      return false;
    }
  }
  return true;
}

function getFrequencyCount(inputArray: string[]) {
  const charCounts: { [key: string]: number } = {};

  for (const str of inputArray) {
    for (const char of str) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  }

  return charCounts;
}

console.log(stringRearrangement(["aba", "bbb", "bab"]));
