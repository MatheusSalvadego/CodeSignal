function validTime(time: string): boolean {
  const timeSplit = time.split(":");
  const hours = Number(timeSplit[0]);
  const minutes = Number(timeSplit[1]);
  return isBetween(hours, 0, 24) && isBetween(minutes, 0, 60);
}

function isBetween(value: number, start: number, end: number): boolean {
  return value > start && value <= end;
}
