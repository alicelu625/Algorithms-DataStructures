//From LeetCode: https://leetcode.com/problems/maximum-subarray/
/*Problem:
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Examples:
nums = [-2,1,-3,4,-1,2,1,-5,4] --> 6 from [4,-1,2,1]
nums = [5,4,-1,7,8] --> 23 from [5,4,-1,7,8]
*/

/*Solution: 
Use Dynamic Programming
Subproblem: Solve for maxSum(i) = Maximum sum ending at index i
Problem: Subarray that ends at whichever i that has the largest sum.
Solve for maximum sum at any index i, which has option of
1. continue the subarray: (maximum sum found up until i) + i 
OR 
2. start new subarray at i: new maximum sum from i
--> maxSum(i) = max[maxSum(i-1) + A[i] , A[i]]
*/

//Runtime: O(n) - traverses array once



/*Example iteration: 
[-2, 1, -3, 4, -1, 2, 1, -5, 4] -> 6 [4, -1, 2, 1]

i:               0  1   2  3   4  5  6   7  8
Array:         [-2  1  -3  4  -1  2  1  -5  4]
maxAt_i:        -2  1  -2  4   3  5  6   1  5
largestMaxSum:  -2  1   1  4   4  5  6   6  6

maxAt_i = maximum sum at i = max(maxAt_i+A[i],A[i])
largestMaxSum = largest sum out of maximums computed at each i = max(largestMaxSum, maxAt_i);

largestMaxSum = A[0] = -2
maxAt_i = A[0] = -2

A[1] = 1
maxAt_i = max(-2 + 1, 1) = 1
largestMaxSum = max(-2, 1) = 1

A[2] = -3
maxAt_i = max(1 + (-3), -3) = -2
largestMaxSum = max(1, -2) = 1

A[3] = 4
maxAt_i = max(-2 + 4, 4) = 4
largestMaxSum = max(1, 4) = 4

A[4] = -1
maxAt_i = max(4 + (-1), -1) = 3
largestMaxSum = max(4, 3) = 4

A[6] = 2
maxAt_i = max(3 + 2, 2) = 5
largestMaxSum = max(4, 5) = 5

A[7] = 1
maxAt_i = max(5 + 1, 1) = 6
largestMaxSum = max(5, 6) = 6

A[8] = -5
maxAt_i = max(6 + (-5), -5) = 1
largestMaxSum = max(6, 1) = 6

A[9] = 4
maxAt_i = max(1 + 4, 4) = 5
largestMaxSum = max(6, 5) = 6
*/
