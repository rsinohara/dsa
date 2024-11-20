export default function twoSum(nums: number[], target: number): number[] {
  const sortedInput = nums
    .map((num, i) => ({ value: num, originalIndex: i }))
    .sort((a, b) => a.value - b.value);

  let left = 0;
  let right = sortedInput.length - 1;

  while (left < right) {
    const sum = sortedInput[left].value + sortedInput[right].value;

    if (sum === target) {
      return [
        sortedInput[left].originalIndex,
        sortedInput[right].originalIndex,
      ];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // should not happen according to the problem statement
}
