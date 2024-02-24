function commonCharacterCount(s1: string, s2: string): number {
  const freqMap1 = getFrequencyMap(s1);
  const freqMap2 = getFrequencyMap(s2);
  let commonCount = 0;

  for (const char in freqMap1) {
    if (freqMap2[char]) {
      const minCount = Math.min(freqMap1[char], freqMap2[char]);
      commonCount += minCount;
    }
  }
  return commonCount;
}

function getFrequencyMap(str: string) {
  const freqMap = {};
  for (const char of str) {
    if (!freqMap[char]) {
      freqMap[char] = 0;
    }
    freqMap[char]++;
  }
  return freqMap;
}
