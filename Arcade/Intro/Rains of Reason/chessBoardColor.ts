function chessBoardColor(cell1: string, cell2: string): boolean {
  const row1 = letterToNumber(cell1.charAt(0));
  const col1 = parseInt(cell1.charAt(1));
  const row2 = letterToNumber(cell2.charAt(0));
  const col2 = parseInt(cell2.charAt(1));

  return (row1 + col1) % 2 === (row2 + col2) % 2;
}

function letterToNumber(letter: string): number {
  return letter.charCodeAt(0) - "A".charCodeAt(0) + 1;
}
