function palindromeRearranging(inputString: string): boolean {
  let charFrequency = new Map();
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];

    if (charFrequency.has(currentChar)) {
      charFrequency.set(currentChar, charFrequency.get(currentChar) + 1);
    } else {
      charFrequency.set(currentChar, 1);
    }
  }

  let oddFrequency = 0;
  for (const number of charFrequency.values()) {
    if (number % 2 !== 0) {
      oddFrequency += 1;
    }
  }

  return oddFrequency <= 1;
}
