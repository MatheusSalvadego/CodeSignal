function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number,
): number {
  return (nCols - col) * (nRows - row) + (nRows - row);
}
