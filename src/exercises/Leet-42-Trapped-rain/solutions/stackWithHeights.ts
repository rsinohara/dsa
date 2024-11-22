function trap(height: number[]): number {
  const stack = [height[0]];
  let water = 0;

  for (let i = 1; i < height.length; i++) {
    let stackCount = 0;
    while (stack.length && stack.at(-1) <= height[i]) {
      water += Math.min(stack[0], height[i]) - stack.pop();
      stackCount++;
    }

    if (stack.length && stackCount) {
      const filler = new Array(stackCount).fill(height[i]);
      stack.push(...filler);
    }

    stack.push(height[i]);
  }

  return water;
}
