function areSimilar(a: number[], b: number[]): boolean {
  if (areArraysEgual(a, b)) return true;

  if (a.length !== b.length) return false;

  let mismatchIndex = -1;
  let correctIndex = -1;
  let mismatchsCount = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i] && b[mismatchIndex] === a[i]) {
      correctIndex = i;
      mismatchsCount++;
      continue;
    }

    if (a[i] != b[i]) {
      mismatchsCount++;
      mismatchIndex = i;
    }
  }

  if (mismatchsCount > 2) return false;
  swapIndeces(b, mismatchIndex, correctIndex);
  return areArraysEgual(a, b);
}

function swapIndeces(arr: number[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function areArraysEgual(a: number[], b: number[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
