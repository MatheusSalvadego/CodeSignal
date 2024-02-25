function solution(matrix: boolean[][]): number[][] {
  let output: number[][] = matrix.map((row) => row.map(() => 0));
  const neighbors: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
      const isAMine = matrix[rowIndex][colIndex];
      if (isAMine) {
        for (const [dx, dy] of neighbors) {
          const neighborRowIndex = rowIndex + dx;
          const neighborColIndex = colIndex + dy;

          if (
            neighborRowIndex >= 0 &&
            neighborRowIndex < matrix.length &&
            neighborColIndex >= 0 &&
            neighborColIndex < matrix[0].length
          ) {
            output[neighborRowIndex][neighborColIndex] += 1;
          }
        }
      }
    }
  }

  return output;
}
