function trap(height: number[]): number {
  if (height.length < 3) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;

  let leftCeiling = height[0];
  let rightCeiling = height[height.length - 1];

  let result = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      result += Math.max(Math.min(leftCeiling, rightCeiling) - height[left], 0);
      left++;
      leftCeiling = Math.max(height[left], leftCeiling);
    } else {
      result += Math.max(
        Math.min(leftCeiling, rightCeiling) - height[right],
        0,
      );
      right--;
      rightCeiling = Math.max(height[right], rightCeiling);
    }
  }

  return result;
}
