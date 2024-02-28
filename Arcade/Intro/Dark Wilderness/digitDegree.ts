function digitDegree(n: number): number {
  let degree = 0;
  while (n > 9) {
    n = sumAllInArray(numberToArray(n));
    degree++;
  }
  return degree;
}

function numberToArray(n: number): number[] {
  return `${n}`.split("").map(Number);
}

function sumAllInArray(n: number[]): number {
  return n.reduce((a, b) => a + b);
}
