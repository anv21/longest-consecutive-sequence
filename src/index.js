module.exports = function longestConsecutiveLength(array) {
  const numsSet = new Set(array);
  let longStreak = 0;

  for (let i of numsSet) {
    if (numsSet.has(i - 1) === false) {
      let currentValue = i;
      let currentStreak = 1;

      while (numsSet.has(currentValue + 1)) {
        currentValue += 1;
        currentStreak += 1;
      }

      longStreak = Math.max(currentStreak, longStreak);
    }
  }

  return longStreak;
}