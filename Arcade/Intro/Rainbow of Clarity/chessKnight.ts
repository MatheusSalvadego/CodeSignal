function chessKnight(cell: string): number {
  let chessPosition = cellToNumber(cell);
  return findPossibleMoves(chessPosition[0], chessPosition[1]).length;
}

function cellToNumber(cell: string): number[] {
  let column = cell.charCodeAt(0) - "a".charCodeAt(0);
  return [column, parseInt(cell[1]) - 1];
}

function findPossibleMoves(x: number, y: number) {
  const dx = [2, 2, 1, 1, -1, -1, -2, -2];
  const dy = [1, -1, 2, -2, 2, -2, 1, -1];

  let moves: number[][] = [];

  for (let i = 0; i < 8; i++) {
    let newX: number = x + dx[i];
    let newY: number = y + dy[i];

    if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8) {
      moves.push([newX, newY]);
    }
  }
  return moves;
}
