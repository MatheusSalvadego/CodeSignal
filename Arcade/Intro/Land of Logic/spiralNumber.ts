function spiralNumber(n: number): number[][] {
  let result = Array(n * n)
    .fill(0)
    .map((num, i) => i + 1);

  let matrix: number[][] = [];
  let index = 0;
  while (result.length) {
    matrix.reverse();
    matrix = matrix.length
      ? matrix[0].map((column, i) => matrix.map((row) => row[i]))
      : matrix;
    matrix.unshift(result.splice(-(Math.floor(index / 2) + 1)));
    index++;
  }

  return matrix;
}
