function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number,
): boolean {
  let yourStrongest = Math.max(yourLeft, yourRight);
  let yourWeakest = Math.min(yourLeft, yourRight);

  let friendsStrongest = Math.max(friendsLeft, friendsRight);
  let firendsWeakest = Math.min(friendsLeft, friendsRight);

  return yourStrongest == friendsStrongest && yourWeakest == firendsWeakest;
}
