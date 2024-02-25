function isVariableName(name: string): boolean {
  const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
  return regex.test(name);
}
