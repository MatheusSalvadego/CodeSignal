function differentSymbolsNaive(s: string): number {
  let set = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  return set.size;
}
