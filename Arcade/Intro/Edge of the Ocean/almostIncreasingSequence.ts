function almostIncreasingSequence(sequence: number[]): boolean {
  const length = sequence.length;
  let decreasingPairsCount = 0;
  let index = -1;

  for (let i = 1; i < length; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      decreasingPairsCount++;
      index = i;
    }
  }

  if (decreasingPairsCount > 1) return false;

  if (decreasingPairsCount == 0) return true;
  if (index == length - 1 || index == 1) return true;
  if (sequence[index - 1] < sequence[index + 1]) return true;
  if (sequence[index - 2] < sequence[index]) return true;

  return false;
}
