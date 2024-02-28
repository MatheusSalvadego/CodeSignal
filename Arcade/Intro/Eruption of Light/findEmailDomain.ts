function findEmailDomain(address: string): string {
  return address.substring(address.lastIndexOf("@") + 1);
}
