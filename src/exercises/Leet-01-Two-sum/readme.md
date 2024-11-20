# [Two Sums](https://leetcode.com/problems/two-sum/description/)

Exercise:

- Solve in n²
- Solve in nlogn
- Solve in n

You should try to figure out how to achieve those solutions before checking the
descriptions below, or even the actual implementations in the solutions folder.

<details>
  <summary>Solution descriptions (spoilers)</summary>

| Time complexity | Solution                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| O(n²)           | Compare every number with every other number                                                              |
| O(nlogn)        | Sort the array first, then search for matching pairs using two pointers                                   |
| O(n)            | For each value, search for the complementary value in a hashmap, if not found, store the value in the map |

</details>
