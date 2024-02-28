function buildPalindrome(st: string): string {
  let i = 0;
  let temp: string[];
  while (st != reverse(st)) {
    temp = st.split("");
    temp.splice(st.length - i, 0, st[i]);
    st = temp.join("");
    i++;
  }
  return st;
}

function reverse(st: string): string {
  return st.split("").reverse().join("");
}
