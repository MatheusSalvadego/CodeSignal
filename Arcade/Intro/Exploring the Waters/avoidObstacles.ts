function avoidObstacles(inputArray: number[]): number {
  let max = Math.max(...inputArray);

  for (let i = 1; i < max; i++) {
    let isAnyElementDivisibleByI = inputArray.some((num) =>
      isDivisible(num, i),
    );

    if (!isAnyElementDivisibleByI) return i;
  }

  return max + 1;
}

function isDivisible(num: number, denominator: number): boolean {
  return num % denominator == 0;
}
