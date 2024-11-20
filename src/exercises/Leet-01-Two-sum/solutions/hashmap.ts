export default function twoSum(nums: number[], target: number): number[] {
  const values: { [K: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (values[complement] !== undefined) {
      return [values[complement], i];
    }

    values[nums[i]] = i;
  }

  return []; //Should not happen according to the problem statement
}
