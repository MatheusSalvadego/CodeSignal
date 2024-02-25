function addTwoDigits(n: number): number {
  return parseInt((n / 10 + (n % 10)).toString());
}
