function isBeautifulString(inputString: string): boolean {
  let freqMap = getCharsFrequency(inputString);
  for (let i = 1; i < freqMap.length; i++) {
    if (freqMap[i] > freqMap[i - 1]) {
      return false;
    }
  }

  return true;
}

function getCharsFrequency(s: string) {
  let freqMap: number[] = [];

  for (let i = 0; i < 26; i++) {
    freqMap.push(0);
  }

  for (let i = 0; i < s.length; i++) {
    let char = s.charCodeAt(i) - 97;
    freqMap[char]++;
  }

  return freqMap;
}
