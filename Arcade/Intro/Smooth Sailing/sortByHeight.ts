function sortByHeight(a: number[]): number[] {
  let people: number[] = [];
  let treesPosition: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      people.push(a[i]);
    } else {
      treesPosition.push(i);
    }
  }

  people.sort((a, b) => a - b);

  let finalArray: number[] = [];
  let peopleIndex = 0;

  for (let i = 0; i < a.length; i++) {
    if (treesPosition.includes(i)) {
      finalArray.push(-1);
    } else {
      finalArray.push(people[peopleIndex]);
      peopleIndex++;
    }
  }

  return finalArray;
}
