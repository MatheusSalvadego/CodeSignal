function lateRide(n: number): number {
  return `${Math.floor(n / 60)}${n % 60}`
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
}
