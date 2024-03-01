function isMac48Address(input: string): boolean {
  let mac48Address = /([0-9A-f]{2}[-]){5}[0-9A-f]{2}$/;
  return mac48Address.test(input);
}
