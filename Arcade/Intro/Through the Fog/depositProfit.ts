function depositProfit(
  deposit: number,
  rate: number,
  threshold: number,
): number {
  let count = 0;
  while (deposit < threshold) {
    deposit += (rate / 100) * deposit;
    count++;
  }
  return count;
}
