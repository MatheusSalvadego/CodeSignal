function digitsProduct(product: number): number {
  if (product == 1) return 1;
  if (product == 0) return 10;

  let result = "";
  let i = 9;
  while (product != 1) {
    if (i == 1) return -1;
    if (product % i == 0) {
      product = product / i;
      result = i.toString() + result;
      i = 9;
    } else {
      i--;
    }
  }
  return parseInt(result);
}
