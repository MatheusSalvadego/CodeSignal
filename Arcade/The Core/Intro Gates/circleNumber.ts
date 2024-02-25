function circleNumbers(n: number, firstNumber: number): number {
  return Math.floor(firstNumber + n / 2) % n;
}
