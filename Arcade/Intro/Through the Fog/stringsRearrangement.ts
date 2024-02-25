function stringsRearrangement(inputArray: string[]) {
  let isRearrangementPossible: boolean = false;
  let currentSolution: string[] = [];
  tryRearranging(inputArray, isRearrangementPossible, currentSolution);
  return isRearrangementPossible;
}

function isValidSolution(solution: string[]) {
  for (let i = 0; i < solution.length - 1; i++) {
    let diffCount = 0;
    for (let j = 0; j < solution[i].length; j++) {
      if (solution[i][j] !== solution[i + 1][j]) {
        diffCount++;
      }
    }

    if (diffCount !== 1) {
      return false;
    }
  }

  return true;
}

function tryRearranging(
  inputArray: string[],
  ret: boolean,
  currentSolution: any[],
) {
  for (let i = 0; i < inputArray.length; i++) {
    if (ret) break;
    currentSolution.push(inputArray.splice(i, 1)[0]);
    if (inputArray.length === 0) {
      ret = ret || isValidSolution(currentSolution);
    } else {
      tryRearranging(inputArray, ret, currentSolution);
    }
    inputArray.splice(i, 0, currentSolution.pop());
  }
}
