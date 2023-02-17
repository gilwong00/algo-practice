function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];

  // sort to solve sum 2 solution. Should still be O(n^2)
  // this also allows us to avoid dupes and it'll point all negatives to the left
  // and we can detech once we hit a positive value since 3 positive values cant === 0
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    // dupe check
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      // calculate sum
      const sum = nums[i] + nums[leftPointer] + nums[rightPointer];

      if (sum === 0) {
        results.push([nums[i], nums[leftPointer], nums[rightPointer]]);

        // increment leftPointer and decrement rightPointer to see if anymore
        // triplets matches
        leftPointer++;
        rightPointer--;

        while (
          leftPointer < rightPointer &&
          nums[leftPointer] === nums[leftPointer - 1]
        ) {
          leftPointer++;
        }
      } else if (sum < 0) {
        // increment leftPointer till it hits 0
        leftPointer++;
      } else {
        // decrement rightPointer till it hits 0
        rightPointer--;
      }
    }
  }

  return results;
}
