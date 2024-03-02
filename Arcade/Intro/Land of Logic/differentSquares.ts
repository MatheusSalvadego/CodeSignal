function differentSquares(matrix: number[][]): number {
  let set = new Set();
  for (let yCoord = 0; yCoord < matrix.length - 1; yCoord++) {
    for (let xCoord = 0; xCoord < matrix[yCoord].length - 1; xCoord++) {
      let newMatrix = [
        matrix[yCoord][xCoord],
        matrix[yCoord][xCoord + 1],
        matrix[yCoord + 1][xCoord],
        matrix[yCoord + 1][xCoord + 1],
      ];
      set.add(newMatrix.toString());
    }
  }
  return set.size;
}

/*









*/
