function reachNextLevel(
  experience: number,
  threshold: number,
  reward: number,
): boolean {
  return threshold - experience <= reward;
}
