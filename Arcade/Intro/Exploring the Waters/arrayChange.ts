function arrayChange(inputArray: number[]): number {
  let minMoves: number = 0;
  for (let i: number = 1; i < inputArray.length; i++) {
    const currentElement = inputArray[i];
    const previousElement = inputArray[i - 1];
    if (currentElement <= previousElement) {
      minMoves += previousElement - currentElement + 1;
      inputArray[i] = previousElement + 1;
    }
  }

  return minMoves;
}
