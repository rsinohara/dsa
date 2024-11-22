function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque = [];

  const result = [];

  for (let i = 0; i < k; i++) {
    while (deque && nums[i] >= nums[deque.at(-1)]) {
      deque.pop();
    }
    deque.push(i);
  }

  result.push(nums[deque[0]]);

  for (let i = k; i < nums.length; i++) {
    if (deque[0] <= i - k) {
      deque.shift();
    }

    while (deque && nums[i] >= nums[deque.at(-1)]) {
      deque.pop();
    }

    deque.push(i);

    result.push(nums[deque[0]]);
  }

  return result;
}
