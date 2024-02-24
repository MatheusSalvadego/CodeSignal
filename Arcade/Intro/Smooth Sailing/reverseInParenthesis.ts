function solution(inputString: string): string {
  if (!inputString.includes("(")) {
    return inputString;
  }

  let start = inputString.indexOf("(");
  let end = getCorrespondingEndIndex(inputString, start + 1);

  let inside = solution(inputString.substring(start + 1, end - 1));

  inputString =
    inputString.substring(0, start) +
    reverseString(inside) +
    inputString.substring(end);

  return solution(inputString);
}

function getCorrespondingEndIndex(inputString: string, end: number): number {
  let count = 1;

  while (count > 0) {
    if (inputString[end] === "(") {
      count += 1;
    } else if (inputString[end] === ")") {
      count -= 1;
    }
    end += 1;
  }

  return end;
}

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}
