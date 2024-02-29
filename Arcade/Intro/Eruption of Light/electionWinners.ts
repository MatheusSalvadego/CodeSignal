function electionWinners(votes: number[], k: number): number {
  const maxVotes = Math.max(...votes);
  const maxVotesCount = votes.filter((vote) => vote === maxVotes).length;

  return votes.reduce(
    (winningCount, currentVotes) =>
      winningCount +
      ((currentVotes === maxVotes && maxVotesCount === 1) ||
      isEnough(currentVotes, k, maxVotes)
        ? 1
        : 0),
    0,
  );
}

function isEnough(
  currentVotes: number,
  remaingVotes: number,
  maxVotes: number,
) {
  return currentVotes + remaingVotes > maxVotes;
}
