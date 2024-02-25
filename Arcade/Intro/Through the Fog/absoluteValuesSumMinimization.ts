function absoluteValuesSumMinimization(a: number[]): number {
  let output = Number.MAX_VALUE;
  let bestValue = 0;
  let currentWholeDiff = 0;
  for (let i = 0; i < a.length; i++) {
    a.forEach((n) => {
      let absDiff = Math.abs(n - a[i]);
      currentWholeDiff += absDiff;
    });

    if (currentWholeDiff < output) {
      output = currentWholeDiff;
      bestValue = a[i];
    }
    currentWholeDiff = 0;
  }

  return bestValue;
}
