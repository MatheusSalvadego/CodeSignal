function sumUpNumbers(inputString: string): number {
  let nums = inputString
    .split(/(\d+)/)
    .map(Number)
    .filter((num) => !isNaN(num) && num > 0);
  return nums.reduce((a, b) => a + b, 0);
}
