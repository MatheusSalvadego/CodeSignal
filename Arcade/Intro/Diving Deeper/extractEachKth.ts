function extractEachKth(inputArray: [], k: number): number[] {
  return inputArray.filter((num, ind) => (ind + 1) % k != 0);
}
