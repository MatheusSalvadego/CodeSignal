function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let maxSum = inputArray.slice(0, k).reduce((a, b) => a + b);
  let current = maxSum;
  for (let i = 0; i < inputArray.length; i++) {
    current += inputArray[i] - inputArray[i - k];
    if (current > maxSum) {
      maxSum = current;
    }
  }
  return maxSum;
}
