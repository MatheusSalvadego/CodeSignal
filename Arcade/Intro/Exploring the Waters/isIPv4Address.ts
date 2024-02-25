function isIPv4Address(inputString: string): boolean {
  const parts = inputString.split(".");

  if (parts.length !== 4) {
    return false;
  }

  for (const part of parts) {
    const num = Number(part);

    if (isNaN(num) || num < 0 || num > 255 || part !== num.toString()) {
      return false;
    }
  }

  return true;
}
