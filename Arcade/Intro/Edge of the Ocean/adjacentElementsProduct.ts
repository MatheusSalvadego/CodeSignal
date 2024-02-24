function adjacentElementsProduct(inputArray: number[]): number {
  let biggest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > biggest) {
      biggest = inputArray[i] * inputArray[i + 1];
      console.log(biggest);
    }
  }

  return biggest;
}
