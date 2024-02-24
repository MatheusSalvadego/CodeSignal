function isLucky(n: number): boolean {
  let numStr = n.toString();
  const middleIndex = Math.floor(numStr.length / 2);
  const firstHalf = numStr.slice(0, middleIndex);
  const secondHalf = numStr.slice(middleIndex);

  let sum1 = sumOfAllInArray(firstHalf);
  let sum2 = sumOfAllInArray(secondHalf);

  return sum1 === sum2;
}

function sumOfAllInArray(arr: string): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}
