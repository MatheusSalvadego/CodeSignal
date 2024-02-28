function bishopAndPawn(bishop: string, pawn: string): boolean {
  let bishopCoords = stringToSquare(bishop);
  let pawnCoords = stringToSquare(pawn);
  return (
    isOnLeftBoardDiagonal(bishopCoords, pawnCoords) ||
    isOnRightBoardDiagonal(bishopCoords, pawnCoords)
  );
}

function isOnLeftBoardDiagonal(
  bishopCoords: number[],
  pawnCoords: number[],
): boolean {
  return bishopCoords[0] - bishopCoords[1] === pawnCoords[0] - pawnCoords[1];
}

function isOnRightBoardDiagonal(
  bishopCoords: number[],
  pawnCoords: number[],
): boolean {
  return bishopCoords[0] + bishopCoords[1] === pawnCoords[0] + pawnCoords[1];
}

function stringToSquare(square: string): number[] {
  let squareArr: number[] = [];
  squareArr.push(square.charCodeAt(0) - "A".charCodeAt(0) + 1);
  squareArr.push(Number(square[1]));
  return squareArr;
}
