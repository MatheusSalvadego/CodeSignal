function fileNaming(names: string[]): string[] {
  let map: { [key: string]: number } = {};
  let files: string[] = [];

  for (let i = 0; i < names.length; i++) {
    let filename = names[i];
    if (!map[filename]) {
      map[filename] = 1;
    } else {
      let count = map[filename];
      while (map[`${filename}(${count})`]) {
        count++;
      }
      map[filename] = count;
      names[i] = `${filename}(${count})`;
      map[names[i]] = 1;
    }
  }

  return files;
}

let names = ["doc", "doc", "image", "doc(1)", "doc"];

console.log(fileNaming(names));
