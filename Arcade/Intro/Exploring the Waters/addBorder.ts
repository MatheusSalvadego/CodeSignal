function addBorder(picture: string[]): string[] {
  let endResult: string[] = [];
  let borderSize: number = picture[0].length;
  let border = "**";
  for (let i = 0; i < borderSize; i++) {
    border += "*";
  }
  endResult.push(border);

  for (const str of picture) {
    endResult.push("*" + str + "*");
  }

  endResult.push(border);
  return endResult;
}
