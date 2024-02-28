function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number,
): number {
  if (desiredHeight <= upSpeed) return 1;
  return Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}
