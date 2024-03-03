function sudoku(grid: number[][]): boolean {
  let columnArray: number[] = [];
  let rowArray: number[] = [];
  let columnSet = new Set();
  let rowSet = new Set();

  for (let row = 0; row < grid.length; row += 3) {
    for (let column = 0; column < grid[row].length; column += 3) {
      let squareSet = new Set();

      for (let r = row; r < row + 3; r++) {
        for (let c = column; c < column + 3; c++) {
          squareSet.add(grid[r][c]);
        }
      }

      if (squareSet.size !== 9) return false;
    }
  }

  for (let column = 0; column < grid[0].length; column++) {
    for (let row = 0; row < grid.length; row++) {
      columnArray.push(grid[row][column]);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      rowArray.push(grid[row][column]);
    }
  }

  for (let index = 0; index < columnArray.length; index++) {
    columnSet.add(columnArray[index]);
    let pivot = index + 1;
    if (pivot % 9 == 0) {
      if (columnSet.size != 9) return false;
      columnSet.clear();
    }
  }

  for (let index = 0; index < rowArray.length; index++) {
    rowSet.add(rowArray[index]);
    let pivot = index + 1;
    if (pivot % 9 === 0) {
      if (rowSet.size != 9) return false;
      rowSet.clear();
    }
  }

  return true;
}
