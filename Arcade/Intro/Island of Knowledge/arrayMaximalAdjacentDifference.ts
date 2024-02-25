function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDifference = Math.abs(inputArray[1] - inputArray[0]);
  for (let i = 1; i < inputArray.length; i++) {
    const difference = Math.abs(inputArray[i] - inputArray[i - 1]);

    if (difference > maxDifference) {
      maxDifference = difference;
    }
  }

  return maxDifference;
}
