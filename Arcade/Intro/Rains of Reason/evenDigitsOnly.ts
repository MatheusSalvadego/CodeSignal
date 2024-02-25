function evenDigitsOnly(n: number): boolean {
  let arr = numberToArray(n);
  for (let num of arr) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}

function numberToArray(n: number): number[] {
  return `${n}`.split("").map(Number);
}
