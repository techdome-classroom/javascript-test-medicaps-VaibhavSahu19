function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  const positiveNums = new Set();
    for (const num of nums) {
        if (num > 0) {
            positiveNums.add(num);
        }
    }
    let missing = 1;
    while (positiveNums.has(missing)) {
        missing++;
    }

    return missing;

}

module.exports = smallestMissingPositiveInteger;
