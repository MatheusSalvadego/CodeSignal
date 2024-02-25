function boxBlurImage(image: number[][]): number[][] {
  const blurredImage: number[][] = new Array(image.length - 2)
    .fill(0)
    .map(() => new Array(image[0].length - 2).fill(0));

  for (let rowIndex = 1; rowIndex < image.length - 1; rowIndex++) {
    for (let colIndex = 1; colIndex < image[rowIndex].length - 1; colIndex++) {
      let pixelSum = 0;
      let pixelCount = 0;

      const adjacentPixels = getAdjacents(
        rowIndex,
        colIndex,
        image.length,
        image[rowIndex].length,
      );

      for (const [adjRowIndex, adjColIndex] of adjacentPixels) {
        pixelSum += image[adjRowIndex][adjColIndex];
        pixelCount++;
      }

      blurredImage[rowIndex - 1][colIndex - 1] = Math.floor(
        pixelSum / pixelCount,
      );
    }
  }

  return blurredImage;
}

function getAdjacents(
  rowIndex: number,
  colIndex: number,
  imageRows: number,
  imageCols: number,
): number[][] {
  const adjacentPixels: number[][] = [];
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      const newRowIndex = rowIndex + rowOffset;
      const newColIndex = colIndex + colOffset;
      if (
        newRowIndex >= 0 &&
        newRowIndex < imageRows &&
        newColIndex >= 0 &&
        newColIndex < imageCols
      ) {
        adjacentPixels.push([newRowIndex, newColIndex]);
      }
    }
  }
  return adjacentPixels;
}
