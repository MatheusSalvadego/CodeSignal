function phoneCall(
  min1: number,
  min2_10: number,
  min11: number,
  s: number,
): number {
  let t = 0;
  if (s >= min1) {
    s -= min1;
    t += 1;
  }

  if (s >= min2_10) {
    let m = Math.min(9, s / min2_10);
    t += m;
    s -= min2_10 * m;
  }

  if (s >= min11) {
    t += s / min11;
  }

  return Math.floor(t);
}
