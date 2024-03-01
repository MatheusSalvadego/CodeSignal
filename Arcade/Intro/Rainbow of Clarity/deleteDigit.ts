function deleteDigit(n: number): number {
  let nArray = numToNumberArray(n);
  return Math.max(
    ...nArray.map((num, index) => {
      let stringArray = nArray.slice();
      stringArray.splice(index, 1);
      return Number(stringArray.join(""));
    }),
  );
}

function numToNumberArray(n: number): number[] {
  return n.toString().split("").map(Number);
}
