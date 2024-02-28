function longestDigitsPrefix(s: string): string {
  let latestIndex: number = 0;
  for (latestIndex; latestIndex < s.length; latestIndex++) {
    if (!/\d/.test(s[latestIndex])) break;
  }
  return s.substring(0, latestIndex);
}
