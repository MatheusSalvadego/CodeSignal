function checkPalindrome(str: string): boolean {
  return reverseString(str) === str;
}

function reverseString(str: string): string {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp = str[i] + temp;
  }
  return temp;
}
