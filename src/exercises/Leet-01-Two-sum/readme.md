# [Two Sums](https://leetcode.com/problems/two-sum/description/)

You should try to figure out how to achieve those solutions before checking the
descriptions below, or even the actual implementations in the solutions folder.

First light spoilers are the requested complexities in class. Should not spoil
too much to look at them, but still better to think about them by yourself first

<details>
  <summary>Light spoilers: requested complexities</summary>

- Solve in n²
- Solve in nlogn
- Solve in n

</details>

Now, what techniques can be used to achieve the requested complexities. You
should really not look at those unless you really thought about it and are
stuck... or to verify your thinking

<details>
  <summary>Spoilers: high level solution descriptions</summary>

| Time complexity | Solution                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| O(n²)           | Compare every number with every other number                                                              |
| O(nlogn)        | Sort the array first, then search for matching pairs using two pointers                                   |
| O(n)            | For each value, search for the complementary value in a hashmap, if not found, store the value in the map |

</details>
